import { ZodError, ZodSchema } from 'zod';

export function validateRequest<T>(schema: ZodSchema<T>, data: any) {
    try {
        const validatedData = schema.parse(data);
        return { data: validatedData, errors: null };
    } catch (error) {
        if (error instanceof ZodError) {
            return {
                data: null,
                errors: {
                    message: "Validation failed",
                    details: error.flatten().fieldErrors
                }
            };
        }
        throw error;
    }
}
