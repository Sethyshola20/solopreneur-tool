
import { toast } from "sonner";
import z from "zod";
import { authClient } from "./auth/auth-client";

export const signinSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters" }),
});

export const signupSchema = z
    .object({
        name: z.string().max(20),
        email: z.string().email({ message: "Invalid email address" }),
        password: z
            .string()
            .min(8, { message: "Password must be at least 8 characters" }),
        confirmPassword: z
            .string()
            .min(8, { message: "Password must be at least 8 characters" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export type SignInFormType = z.infer<typeof signinSchema>;
export type SignupFormType = z.infer<typeof signupSchema>;

export function useSignIn() {
    const signIn = async (authData: SignInFormType) => {
        signinSchema.parse(authData);

        let loadingToastId: string | number;

        await authClient.signIn.email(
            {
                email: authData.email,
                password: authData.password,
                callbackURL: "/dashboard",
            },
            {
                onRequest: (ctx) => {
                    loadingToastId = toast.loading("Connection...");
                },
                onSuccess: async (ctx) => {
                    loadingToastId && toast.dismiss(loadingToastId);
                },
                onError: (ctx) => {
                    toast.dismiss(loadingToastId);
                    toast.error(ctx.error.message);
                },
            },
        );
    };
    return signIn;
}

export async function SignOut() {
    await authClient.signOut({
        fetchOptions: {
            onSuccess: () => {
                window.location.href = "/";
            },
            onError: (ctx) => {
                toast.error(ctx.error.message);
            },
        },
    });
}


export function useSignUp() {
    const signUp = async (authData: SignupFormType) => {
        signupSchema.parse(authData);

        let loadingToastId: string | number;

        console.log({ authData })
        await authClient.signUp.email(
            {
                name: authData.name,
                email: authData.email,
                password: authData.password,
                callbackURL: "/dashboard",
            },
            {
                onRequest: () => {
                    console.log('loading')
                    loadingToastId = toast.loading("Connection...");
                },
                onSuccess: async () => {
                    loadingToastId && toast.dismiss(loadingToastId);
                },
                onError: (ctx) => {
                    console.log('error auth: ', ctx)
                    toast.dismiss(loadingToastId);
                    toast.error(ctx.error.message);
                },
            },
        );
    };

    return signUp;
}

