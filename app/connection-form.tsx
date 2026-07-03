"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Loader2, Lock, Mail, User as UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
    SignInFormType,
    signinSchema,
    SignupFormType,
    signupSchema,
    useSignIn,
    useSignUp,
} from "@/lib/connection";

type Mode = "login" | "signup";

function IconInput({
    icon: Icon,
    trailing,
    ...props
}: React.ComponentProps<typeof Input> & {
    icon: React.ElementType;
    trailing?: React.ReactNode;
}) {
    return (
        <div className="relative">
            <Icon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" strokeWidth={1.5} />
            <Input
                className={cn("h-11 pl-10", trailing && "pr-10", props.className)}
                {...props}
            />
            {trailing}
        </div>
    );
}

export function ConnectionForm() {
    const [mode, setMode] = useState<Mode>("login");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const signUp = useSignUp();
    const signIn = useSignIn();

    const loginForm = useForm<SignInFormType>({
        resolver: zodResolver(signinSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const signupForm = useForm<SignupFormType>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSignIn = loginForm.handleSubmit(async (values) => {
        await signIn(values);
    });

    const onSignUp = signupForm.handleSubmit(async (values) => {
        await signUp(values);
    });

    return (
        <div className="w-full">
            <div className="relative grid grid-cols-2 rounded-full border border-border bg-muted/40 p-1">
                <div
                    className="cursor-pointer absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-background shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{ transform: mode === "signup" ? "translateX(calc(100%+4px))" : "translateX(0)" }}
                />
                <button
                    type="button"
                    onClick={() => setMode("login")}
                    className={cn(
                        "relative z-10 rounded-full py-2 text-sm font-medium transition-colors duration-200",
                        mode === "login" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                >
                    Connexion
                </button>
                <button
                    type="button"
                    onClick={() => setMode("signup")}
                    className={cn(
                        "relative z-10 rounded-full py-2 text-sm font-medium transition-colors duration-200",
                        mode === "signup" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                >
                    Inscription
                </button>
            </div>

            <div className="relative mt-6 overflow-hidden">
                <div
                    className={cn(
                        "flex w-[200%] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        mode === "signup" && "-translate-x-1/2"
                    )}
                >
                    <div className="w-1/2 pr-1">
                        <Form {...loginForm}>
                            <form onSubmit={onSignIn} className="space-y-4" aria-hidden={mode !== "login"}>
                                <FormField
                                    control={loginForm.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Adresse e-mail</FormLabel>
                                            <FormControl>
                                                <IconInput icon={Mail} placeholder="vous@exemple.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={loginForm.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Mot de passe</FormLabel>
                                            <FormControl>
                                                <IconInput
                                                    icon={Lock}
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="••••••••"
                                                    trailing={
                                                        <button
                                                            type="button"
                                                            onClick={() => setShowPassword((v) => !v)}
                                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                                                            tabIndex={-1}
                                                        >
                                                            {showPassword ? (
                                                                <EyeOff className="size-4" strokeWidth={1.5} />
                                                            ) : (
                                                                <Eye className="size-4" strokeWidth={1.5} />
                                                            )}
                                                        </button>
                                                    }
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button
                                    type="submit"
                                    disabled={loginForm.formState.isSubmitting}
                                    className="h-11 w-full active:scale-[0.98] transition-transform"
                                >
                                    {loginForm.formState.isSubmitting ? (
                                        <Loader2 className="size-4 animate-spin" strokeWidth={1.5} />
                                    ) : (
                                        "Se connecter"
                                    )}
                                </Button>
                            </form>
                        </Form>
                    </div>

                    <div className="w-1/2 pl-1">
                        <Form {...signupForm}>
                            <form onSubmit={onSignUp} className="space-y-4" aria-hidden={mode !== "signup"}>
                                <FormField
                                    control={signupForm.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nom</FormLabel>
                                            <FormControl>
                                                <IconInput icon={UserIcon} placeholder="Camille Fabre" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={signupForm.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Adresse e-mail</FormLabel>
                                            <FormControl>
                                                <IconInput icon={Mail} placeholder="vous@exemple.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={signupForm.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Mot de passe</FormLabel>
                                            <FormControl>
                                                <IconInput
                                                    icon={Lock}
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="••••••••"
                                                    trailing={
                                                        <button
                                                            type="button"
                                                            onClick={() => setShowPassword((v) => !v)}
                                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                                                            tabIndex={-1}
                                                        >
                                                            {showPassword ? (
                                                                <EyeOff className="size-4" strokeWidth={1.5} />
                                                            ) : (
                                                                <Eye className="size-4" strokeWidth={1.5} />
                                                            )}
                                                        </button>
                                                    }
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={signupForm.control}
                                    name="confirmPassword"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Confirmer le mot de passe</FormLabel>
                                            <FormControl>
                                                <IconInput
                                                    icon={Lock}
                                                    type={showConfirmPassword ? "text" : "password"}
                                                    placeholder="••••••••"
                                                    trailing={
                                                        <button
                                                            type="button"
                                                            onClick={() => setShowConfirmPassword((v) => !v)}
                                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                                                            tabIndex={-1}
                                                        >
                                                            {showConfirmPassword ? (
                                                                <EyeOff className="size-4" strokeWidth={1.5} />
                                                            ) : (
                                                                <Eye className="size-4" strokeWidth={1.5} />
                                                            )}
                                                        </button>
                                                    }
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button
                                    type="submit"
                                    disabled={signupForm.formState.isSubmitting}
                                    className="h-11 w-full active:scale-[0.98] transition-transform"
                                >
                                    {signupForm.formState.isSubmitting ? (
                                        <Loader2 className="size-4 animate-spin" strokeWidth={1.5} />
                                    ) : (
                                        "Créer mon compte"
                                    )}
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}
