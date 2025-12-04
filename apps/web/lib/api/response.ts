export function successResponse<T>(data: T, status = 200) {
    if (status === 204) {
        return Response.json(null, { status });
    }
    return Response.json({ data, error: null }, { status });
}

export function errorResponse(message: string, status = 400) {
    return Response.json({ data: null, error: message }, { status });
}
