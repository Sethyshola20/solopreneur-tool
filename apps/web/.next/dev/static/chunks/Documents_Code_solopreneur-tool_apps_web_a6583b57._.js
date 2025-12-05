(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Code/solopreneur-tool/apps/web/api_service/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "request",
    ()=>request
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:3000/api") || (("TURBOPACK compile-time truthy", 1) ? '/api' : "TURBOPACK unreachable");
const request = async (endpoint, options = {})=>{
    const { method, data, headers, ...rest } = options;
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
        method,
        credentials: "include",
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        ...rest
    };
    if (data && method !== 'GET') {
        config.body = JSON.stringify(data);
    }
    try {
        const response = await fetch(url, config);
        if (!response.ok) {
            const errorData = await response.json().catch(()=>({}));
            throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
        }
        if (response.status === 204) {
            return {};
        }
        const finalData = await response.json();
        return finalData;
    } catch (error) {
        console.error("API Request Failed:", error);
        throw error;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Code/solopreneur-tool/apps/web/lib/use-cases/clients.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient,
    "deleteClient",
    ()=>deleteClient,
    "getClient",
    ()=>getClient,
    "getClients",
    ()=>getClients,
    "updateClient",
    ()=>updateClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$api_service$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/api_service/index.ts [app-client] (ecmascript)");
;
async function getClients() {
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$api_service$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["request"])('/clients');
    if (res.error) {
        throw new Error(res.error);
    }
    return res.data || [];
}
async function getClient(id) {
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$api_service$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["request"])(`/clients/${id}`);
    if (res.error) {
        throw new Error(res.error);
    }
    if (!res.data) {
        throw new Error('Client not found');
    }
    return res.data;
}
async function createClient(data) {
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$api_service$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["request"])('/clients', {
        method: 'POST',
        data
    });
    if (res.error) {
        throw new Error(res.error);
    }
    if (!res.data) {
        throw new Error('Failed to create client');
    }
    return res.data;
}
async function updateClient(id, data) {
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$api_service$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["request"])(`/clients/${id}`, {
        method: 'PATCH',
        data
    });
    if (res.error) {
        throw new Error(res.error);
    }
    if (!res.data) {
        throw new Error('Failed to update client');
    }
    return res.data;
}
async function deleteClient(id) {
    if (!id) return;
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$api_service$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["request"])(`/clients/${id}`, {
        method: 'DELETE'
    });
    if (res.error) {
        throw new Error(res.error);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Code/solopreneur-tool/apps/web/hooks/use-clients.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useClient",
    ()=>useClient,
    "useClients",
    ()=>useClients,
    "useCreateClient",
    ()=>useCreateClient,
    "useDeleteClient",
    ()=>useDeleteClient,
    "useUpdateClient",
    ()=>useUpdateClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$use$2d$cases$2f$clients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/use-cases/clients.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
;
;
function useClients() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'clients'
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$use$2d$cases$2f$clients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClients"]
    });
}
_s(useClients, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useClient(id) {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'client',
            id
        ],
        queryFn: {
            "useClient.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$use$2d$cases$2f$clients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])(id)
        }["useClient.useQuery"],
        enabled: !!id
    });
}
_s1(useClient, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useCreateClient() {
    _s2();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCreateClient.useMutation": (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$use$2d$cases$2f$clients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])(data)
        }["useCreateClient.useMutation"],
        onSuccess: {
            "useCreateClient.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'clients'
                    ]
                });
            }
        }["useCreateClient.useMutation"]
    });
}
_s2(useCreateClient, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useUpdateClient(id) {
    _s3();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useUpdateClient.useMutation": (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$use$2d$cases$2f$clients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateClient"])(id, data)
        }["useUpdateClient.useMutation"],
        onSuccess: {
            "useUpdateClient.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'clients'
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        'client',
                        id
                    ]
                });
            }
        }["useUpdateClient.useMutation"]
    });
}
_s3(useUpdateClient, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useDeleteClient(id) {
    _s4();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useDeleteClient.useMutation": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$use$2d$cases$2f$clients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteClient"])(id)
        }["useDeleteClient.useMutation"],
        onSuccess: {
            "useDeleteClient.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'clients'
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        'client',
                        id
                    ]
                });
            }
        }["useDeleteClient.useMutation"]
    });
}
_s4(useDeleteClient, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Code/solopreneur-tool/apps/web/lib/use-cases/devis.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDevis",
    ()=>createDevis,
    "deleteDevis",
    ()=>deleteDevis,
    "getDevis",
    ()=>getDevis,
    "getDevisList",
    ()=>getDevisList,
    "updateDevis",
    ()=>updateDevis
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$api_service$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/api_service/index.ts [app-client] (ecmascript)");
;
async function getDevisList() {
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$api_service$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["request"])('/devis');
    if (res.error) {
        throw new Error(res.error);
    }
    if (!res.data) {
        throw new Error('Devis not found');
    }
    return res.data;
}
async function getDevis(id) {
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$api_service$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["request"])(`/devis/${id}`);
    if (res.error) {
        throw new Error(res.error);
    }
    if (!res.data) {
        throw new Error('Devis not found');
    }
    return res.data;
}
async function createDevis(data) {
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$api_service$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["request"])('/devis', {
        method: 'POST',
        data
    });
    if (res.error) {
        throw new Error(res.error);
    }
    if (!res.data) {
        throw new Error('Failed to create devis');
    }
    return res.data;
}
async function updateDevis(id, data) {
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$api_service$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["request"])(`/devis/${id}`, {
        method: 'PATCH',
        data
    });
    if (res.error) {
        throw new Error(res.error);
    }
    if (!res.data) {
        throw new Error('Failed to update devis');
    }
    return res.data;
}
async function deleteDevis(id) {
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$api_service$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["request"])(`/devis/${id}`, {
        method: 'DELETE'
    });
    if (res.error) {
        throw new Error(res.error);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Code/solopreneur-tool/apps/web/hooks/use-devis.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCreateDevis",
    ()=>useCreateDevis,
    "useDeleteDevis",
    ()=>useDeleteDevis,
    "useDevis",
    ()=>useDevis,
    "useDevisList",
    ()=>useDevisList,
    "useUpdateDevis",
    ()=>useUpdateDevis
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$use$2d$cases$2f$devis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/use-cases/devis.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
;
;
function useDevisList() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'devis'
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$use$2d$cases$2f$devis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDevisList"]
    });
}
_s(useDevisList, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useDevis(id) {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'devis',
            id
        ],
        queryFn: {
            "useDevis.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$use$2d$cases$2f$devis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDevis"])(id)
        }["useDevis.useQuery"],
        enabled: !!id
    });
}
_s1(useDevis, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useCreateDevis() {
    _s2();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCreateDevis.useMutation": (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$use$2d$cases$2f$devis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDevis"])(data)
        }["useCreateDevis.useMutation"],
        onSuccess: {
            "useCreateDevis.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'devis'
                    ]
                });
            }
        }["useCreateDevis.useMutation"]
    });
}
_s2(useCreateDevis, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useUpdateDevis(id) {
    _s3();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useUpdateDevis.useMutation": (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$use$2d$cases$2f$devis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDevis"])(id, data)
        }["useUpdateDevis.useMutation"],
        onSuccess: {
            "useUpdateDevis.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'devis'
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        'devis',
                        id
                    ]
                });
            }
        }["useUpdateDevis.useMutation"]
    });
}
_s3(useUpdateDevis, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useDeleteDevis() {
    _s4();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useDeleteDevis.useMutation": (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$use$2d$cases$2f$devis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDevis"])(id)
        }["useDeleteDevis.useMutation"],
        onSuccess: {
            "useDeleteDevis.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'devis'
                    ]
                });
            }
        }["useDeleteDevis.useMutation"]
    });
}
_s4(useDeleteDevis, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Code/solopreneur-tool/apps/web/lib/use-cases/factures.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createFacture",
    ()=>createFacture,
    "deleteFacture",
    ()=>deleteFacture,
    "getFacture",
    ()=>getFacture,
    "getFacturesList",
    ()=>getFacturesList,
    "updateFacture",
    ()=>updateFacture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$api_service$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/api_service/index.ts [app-client] (ecmascript)");
;
async function getFacturesList() {
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$api_service$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["request"])('/factures');
    if (res.error) {
        throw new Error(res.error);
    }
    return res.data || [];
}
async function getFacture(id) {
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$api_service$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["request"])(`/factures/${id}`);
    if (res.error) {
        throw new Error(res.error);
    }
    if (!res.data) {
        throw new Error('Facture not found');
    }
    return res.data;
}
async function createFacture(data) {
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$api_service$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["request"])('/factures', {
        method: 'POST',
        data
    });
    if (res.error) {
        throw new Error(res.error);
    }
    if (!res.data) {
        throw new Error('Failed to create facture');
    }
    return res.data;
}
async function updateFacture(id, data) {
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$api_service$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["request"])(`/factures/${id}`, {
        method: 'PATCH',
        data
    });
    if (res.error) {
        throw new Error(res.error);
    }
    if (!res.data) {
        throw new Error('Failed to update facture');
    }
    return res.data;
}
async function deleteFacture(id) {
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$api_service$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["request"])(`/factures/${id}`, {
        method: 'DELETE'
    });
    if (res.error) {
        throw new Error(res.error);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Code/solopreneur-tool/apps/web/hooks/use-factures.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCreateFacture",
    ()=>useCreateFacture,
    "useDeleteFacture",
    ()=>useDeleteFacture,
    "useFacture",
    ()=>useFacture,
    "useFacturesList",
    ()=>useFacturesList,
    "useUpdateFacture",
    ()=>useUpdateFacture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$use$2d$cases$2f$factures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/use-cases/factures.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
;
;
;
function useFacturesList() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'factures'
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$use$2d$cases$2f$factures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFacturesList"]
    });
}
_s(useFacturesList, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useFacture(id) {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'facture',
            id
        ],
        queryFn: {
            "useFacture.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$use$2d$cases$2f$factures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFacture"])(id)
        }["useFacture.useQuery"],
        enabled: !!id
    });
}
_s1(useFacture, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useCreateFacture() {
    _s2();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCreateFacture.useMutation": (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$use$2d$cases$2f$factures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFacture"])(data)
        }["useCreateFacture.useMutation"],
        onSuccess: {
            "useCreateFacture.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'factures'
                    ]
                });
                router.push('/factures');
                router.refresh();
            }
        }["useCreateFacture.useMutation"]
    });
}
_s2(useCreateFacture, "OMPBWmuGqcicNpy0gW6DnCxqRr0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useUpdateFacture(id) {
    _s3();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useUpdateFacture.useMutation": (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$use$2d$cases$2f$factures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateFacture"])(id, data)
        }["useUpdateFacture.useMutation"],
        onSuccess: {
            "useUpdateFacture.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'factures'
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        'facture',
                        id
                    ]
                });
                router.push('/factures');
                router.refresh();
            }
        }["useUpdateFacture.useMutation"]
    });
}
_s3(useUpdateFacture, "OMPBWmuGqcicNpy0gW6DnCxqRr0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useDeleteFacture() {
    _s4();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useDeleteFacture.useMutation": (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$use$2d$cases$2f$factures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteFacture"])(id)
        }["useDeleteFacture.useMutation"],
        onSuccess: {
            "useDeleteFacture.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'factures'
                    ]
                });
            }
        }["useDeleteFacture.useMutation"]
    });
}
_s4(useDeleteFacture, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Code/solopreneur-tool/apps/web/lib/use-cases/recettes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRecettesList",
    ()=>getRecettesList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$api_service$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/api_service/index.ts [app-client] (ecmascript)");
;
async function getRecettesList() {
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$api_service$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["request"])("/recettes");
    console.log('res', res);
    if (res.error) {
        throw new Error(res.error);
    }
    return res.data;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Code/solopreneur-tool/apps/web/hooks/use-recettes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRecettesList",
    ()=>useRecettesList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$use$2d$cases$2f$recettes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/use-cases/recettes.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useRecettesList() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'recettes'
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$use$2d$cases$2f$recettes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRecettesList"]
    });
}
_s(useRecettesList, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Code/solopreneur-tool/apps/web/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stats-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatsCard",
    ()=>StatsCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/components/ui/card.tsx [app-client] (ecmascript)");
'use client';
;
;
function StatsCard({ title, value, description, icon: Icon, trend }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "flex flex-row items-center justify-between space-y-0 pb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "text-sm font-medium",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stats-card.tsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        className: "h-4 w-4 text-muted-foreground"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stats-card.tsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stats-card.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl font-bold",
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stats-card.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-foreground mt-1",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stats-card.tsx",
                        lineNumber: 27,
                        columnNumber: 21
                    }, this),
                    trend && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-xs mt-1 ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`,
                        children: [
                            trend.isPositive ? '+' : '',
                            trend.value,
                            "% par rapport au mois dernier"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stats-card.tsx",
                        lineNumber: 30,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stats-card.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stats-card.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
_c = StatsCard;
var _c;
__turbopack_context__.k.register(_c, "StatsCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/revenue-chart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RevenueChart",
    ()=>RevenueChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function RevenueChart({ recettes, stripeStats }) {
    _s();
    const monthlyData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RevenueChart.useMemo[monthlyData]": ()=>{
            const today = new Date();
            const dataLength = 12;
            // 1. Initialize data structure for the last 12 months
            // The index represents the offset from the current month (0 = current month, 11 = 11 months ago)
            const initializedMonths = Array.from({
                length: dataLength
            }, {
                "RevenueChart.useMemo[monthlyData].initializedMonths": (_, i)=>{
                    const date = new Date(today);
                    // Go back 11 months for the first item, up to 0 months for the last item (current month)
                    date.setMonth(today.getMonth() - (dataLength - 1 - i));
                    return {
                        // Key for easy lookup, e.g., '2025-11'
                        key: date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0'),
                        // Display label, e.g., 'Nov.'
                        monthLabel: date.toLocaleDateString('fr-FR', {
                            month: 'short'
                        }),
                        revenue: 0,
                        mrr: 0,
                        total: 0
                    };
                }
            }["RevenueChart.useMemo[monthlyData].initializedMonths"]);
            const dataMap = new Map(initializedMonths.map({
                "RevenueChart.useMemo[monthlyData]": (item)=>[
                        item.key,
                        item
                    ]
            }["RevenueChart.useMemo[monthlyData]"]));
            // 2. Aggregate Non-Recurring Revenue (Recettes)
            recettes.forEach({
                "RevenueChart.useMemo[monthlyData]": (recette)=>{
                    const date = new Date(recette.date);
                    const key = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0');
                    if (dataMap.has(key)) {
                        const monthData = dataMap.get(key);
                        monthData.revenue += Number(recette.amount);
                        monthData.total += Number(recette.amount);
                    }
                }
            }["RevenueChart.useMemo[monthlyData]"]);
            // 3. Aggregate Recurring Revenue (MRR) from Stripe Analytics
            stripeStats?.forEach({
                "RevenueChart.useMemo[monthlyData]": (accountStat)=>{
                    accountStat.monthlyAnalytics.forEach({
                        "RevenueChart.useMemo[monthlyData]": (analytics)=>{
                            const key = analytics.monthKey; // Already in 'YYYY-MM' format from API
                            if (dataMap.has(key)) {
                                const monthData = dataMap.get(key);
                                monthData.mrr += analytics.endingMRR;
                                // Add MRR to the total revenue for the chart
                                monthData.total += analytics.endingMRR;
                            }
                        }
                    }["RevenueChart.useMemo[monthlyData]"]);
                }
            }["RevenueChart.useMemo[monthlyData]"]);
            // Convert Map back to an array in chronological order
            return Array.from(dataMap.values());
        }
    }["RevenueChart.useMemo[monthlyData]"], [
        recettes,
        stripeStats
    ]);
    // Calculate max revenue after aggregation for scaling the bars
    const maxRevenue = Math.max(...monthlyData.map((m)=>m.total), 1000); // Ensure min height for scaling
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "col-span-4 md:col-span-7",
        children: [
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    children: "Évolution du Chiffre d'Affaires Total (CA + MRR)"
                }, void 0, false, {
                    fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/revenue-chart.tsx",
                    lineNumber: 99,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/revenue-chart.tsx",
                lineNumber: 98,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[300px] flex items-end justify-between gap-4",
                    children: monthlyData.map((data, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex flex-col items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full bg-primary rounded-t relative transition-all duration-300",
                                    style: {
                                        height: `${data.total / maxRevenue * 100}%`,
                                        minHeight: data.total > 0 ? '4px' : '0px'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-6 left-0 right-0 text-center text-xs font-medium",
                                        children: data.total > 0 ? `${(data.total / 1000).toFixed(1)}k` : ''
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/revenue-chart.tsx",
                                        lineNumber: 114,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/revenue-chart.tsx",
                                    lineNumber: 106,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-muted-foreground capitalize",
                                    children: data.monthLabel
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/revenue-chart.tsx",
                                    lineNumber: 119,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, data.key, true, {
                            fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/revenue-chart.tsx",
                            lineNumber: 104,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/revenue-chart.tsx",
                    lineNumber: 102,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/revenue-chart.tsx",
                lineNumber: 101,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/revenue-chart.tsx",
        lineNumber: 97,
        columnNumber: 9
    }, this);
}
_s(RevenueChart, "fW1Z/zdHCHgUu/WSTMnTw+TkV1U=");
_c = RevenueChart;
var _c;
__turbopack_context__.k.register(_c, "RevenueChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/recent-activity.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RecentActivity",
    ()=>RecentActivity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$date$2d$fns$2f$locale$2f$fr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/date-fns/locale/fr.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function RecentActivity({ factures }) {
    const recentFactures = factures.slice(0, 5);
    const getStatusColor = (status)=>{
        switch(status){
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'paid':
                return 'bg-green-100 text-green-800';
            case 'cancelled':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };
    const getStatusLabel = (status)=>{
        switch(status){
            case 'pending':
                return 'En attente';
            case 'paid':
                return 'Payée';
            case 'cancelled':
                return 'Annulée';
            default:
                return status;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "col-span-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    children: "Factures Récentes"
                }, void 0, false, {
                    fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/recent-activity.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/recent-activity.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        recentFactures.map((facture, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium",
                                                children: facture.number
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/recent-activity.tsx",
                                                lineNumber: 43,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(facture.date), 'dd MMMM yyyy', {
                                                    locale: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$date$2d$fns$2f$locale$2f$fr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fr"]
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/recent-activity.tsx",
                                                lineNumber: 44,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/recent-activity.tsx",
                                        lineNumber: 42,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium",
                                                children: Number(facture.total).toLocaleString('fr-FR', {
                                                    style: 'currency',
                                                    currency: 'EUR'
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/recent-activity.tsx",
                                                lineNumber: 49,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(facture.status)}`,
                                                children: getStatusLabel(facture.status)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/recent-activity.tsx",
                                                lineNumber: 52,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/recent-activity.tsx",
                                        lineNumber: 48,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/recent-activity.tsx",
                                lineNumber: 41,
                                columnNumber: 25
                            }, this)),
                        recentFactures.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground text-center py-4",
                            children: "Aucune facture récente"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/recent-activity.tsx",
                            lineNumber: 59,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/recent-activity.tsx",
                    lineNumber: 39,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/recent-activity.tsx",
                lineNumber: 38,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/recent-activity.tsx",
        lineNumber: 34,
        columnNumber: 9
    }, this);
}
_c = RecentActivity;
var _c;
__turbopack_context__.k.register(_c, "RecentActivity");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Code/solopreneur-tool/apps/web/lib/use-cases/stripe.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createStripeAccount",
    ()=>createStripeAccount,
    "deleteStripeAccount",
    ()=>deleteStripeAccount,
    "getProducts",
    ()=>getProducts,
    "getStripeAccount",
    ()=>getStripeAccount,
    "getStripeAccounts",
    ()=>getStripeAccounts,
    "getStripeStats",
    ()=>getStripeStats,
    "getStripeSubscriptions",
    ()=>getStripeSubscriptions,
    "syncProducts",
    ()=>syncProducts,
    "updateStripeAccount",
    ()=>updateStripeAccount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$api_service$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/api_service/index.ts [app-client] (ecmascript)");
;
async function getStripeAccounts() {
    const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$api_service$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["request"])('/stripe/accounts', {
        method: "GET"
    });
    if (error) throw new Error(error);
    return data;
}
async function getStripeAccount(id) {
    const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$api_service$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["request"])(`/stripe/accounts/${id}`, {
        method: "GET"
    });
    console.log('stripe stats : ', {
        data,
        error
    });
    if (error) throw new Error(error);
    if (!data) throw new Error('Account not found');
    return data;
}
async function getStripeStats() {
    const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$api_service$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["request"])(`/stripe/stats?force_refresh=true`, {
        method: "GET"
    });
    if (error) throw new Error(error);
    if (!data) throw new Error('Stats not found');
    return data;
}
async function createStripeAccount(data) {
    const { data: res, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$api_service$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["request"])(`/stripe/accounts`, {
        method: 'POST',
        data
    });
    if (error) throw new Error(error);
    if (!res) throw new Error('Failed to create account');
    return res;
}
async function updateStripeAccount(id, data) {
    const { data: res, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$api_service$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["request"])(`/stripe/accounts/${id}`, {
        method: 'PATCH',
        data
    });
    if (error) throw new Error(error);
    if (!res) throw new Error('Failed to update account');
    return res;
}
async function getStripeSubscriptions(accountId) {
    const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$api_service$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["request"])(`/stripe/${accountId}/subscriptions`);
    if (error) throw new Error(error);
    return data;
}
async function deleteStripeAccount(id) {
    const { error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$api_service$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["request"])(`/stripe/accounts/${id}`, {
        method: "DELETE"
    });
    if (error) throw new Error(error);
}
async function getProducts(accountId) {
    const url = accountId ? `/stripe/products?accountId=${accountId}` : '/stripe/products';
    const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$api_service$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["request"])(url);
    if (error) throw new Error(error);
    return data || [];
}
async function syncProducts(accountId) {
    const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$api_service$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["request"])('/stripe/products', {
        method: 'POST',
        data: {
            accountId
        }
    });
    if (error) throw new Error(error);
    if (!data) throw new Error('Failed to sync products');
    return data;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Code/solopreneur-tool/apps/web/hooks/use-stripe.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCreateStripeAccount",
    ()=>useCreateStripeAccount,
    "useDeleteStripeAccount",
    ()=>useDeleteStripeAccount,
    "useProducts",
    ()=>useProducts,
    "useStripeAccount",
    ()=>useStripeAccount,
    "useStripeAccounts",
    ()=>useStripeAccounts,
    "useStripeStats",
    ()=>useStripeStats,
    "useStripeSubscriptions",
    ()=>useStripeSubscriptions,
    "useSyncProducts",
    ()=>useSyncProducts,
    "useUpdateStripeAccount",
    ()=>useUpdateStripeAccount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$use$2d$cases$2f$stripe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/use-cases/stripe.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature();
;
;
function useStripeAccounts() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'stripe-accounts'
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$use$2d$cases$2f$stripe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStripeAccounts"]
    });
}
_s(useStripeAccounts, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useStripeAccount(id) {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'stripe-account',
            id
        ],
        queryFn: {
            "useStripeAccount.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$use$2d$cases$2f$stripe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStripeAccount"])(id)
        }["useStripeAccount.useQuery"],
        enabled: !!id
    });
}
_s1(useStripeAccount, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useStripeStats() {
    _s2();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'stripe-stats'
        ],
        queryFn: {
            "useStripeStats.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$use$2d$cases$2f$stripe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStripeStats"])()
        }["useStripeStats.useQuery"]
    });
}
_s2(useStripeStats, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useCreateStripeAccount() {
    _s3();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCreateStripeAccount.useMutation": (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$use$2d$cases$2f$stripe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStripeAccount"])(data)
        }["useCreateStripeAccount.useMutation"],
        onSuccess: {
            "useCreateStripeAccount.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'stripe-accounts'
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        'products'
                    ]
                });
            }
        }["useCreateStripeAccount.useMutation"]
    });
}
_s3(useCreateStripeAccount, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useUpdateStripeAccount(id) {
    _s4();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useUpdateStripeAccount.useMutation": (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$use$2d$cases$2f$stripe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateStripeAccount"])(id, data)
        }["useUpdateStripeAccount.useMutation"],
        onSuccess: {
            "useUpdateStripeAccount.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'stripe-accounts'
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        'stripe-account',
                        id
                    ]
                });
            }
        }["useUpdateStripeAccount.useMutation"]
    });
}
_s4(useUpdateStripeAccount, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useDeleteStripeAccount() {
    _s5();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useDeleteStripeAccount.useMutation": (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$use$2d$cases$2f$stripe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteStripeAccount"])(id)
        }["useDeleteStripeAccount.useMutation"],
        onSuccess: {
            "useDeleteStripeAccount.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'stripe-accounts'
                    ]
                });
            }
        }["useDeleteStripeAccount.useMutation"]
    });
}
_s5(useDeleteStripeAccount, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useStripeSubscriptions(accountId) {
    _s6();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'stripe-subscriptions',
            accountId
        ],
        queryFn: {
            "useStripeSubscriptions.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$use$2d$cases$2f$stripe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStripeSubscriptions"])(accountId)
        }["useStripeSubscriptions.useQuery"],
        enabled: !!accountId
    });
}
_s6(useStripeSubscriptions, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useProducts(accountId) {
    _s7();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: accountId ? [
            'products',
            accountId
        ] : [
            'products'
        ],
        queryFn: {
            "useProducts.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$use$2d$cases$2f$stripe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProducts"])(accountId)
        }["useProducts.useQuery"]
    });
}
_s7(useProducts, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useSyncProducts() {
    _s8();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useSyncProducts.useMutation": (accountId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$use$2d$cases$2f$stripe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncProducts"])(accountId)
        }["useSyncProducts.useMutation"],
        onSuccess: {
            "useSyncProducts.useMutation": (_, accountId)=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'products'
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        'products',
                        accountId
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        'stripe-accounts'
                    ]
                });
            }
        }["useSyncProducts.useMutation"]
    });
}
_s8(useSyncProducts, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Code/solopreneur-tool/apps/web/components/ui/table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCaption",
    ()=>TableCaption,
    "TableCell",
    ()=>TableCell,
    "TableFooter",
    ()=>TableFooter,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Table = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full overflow-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/ui/table.tsx",
            lineNumber: 10,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Table;
Table.displayName = "Table";
const TableHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/ui/table.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = TableHeader;
TableHeader.displayName = "TableHeader";
const TableBody = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/ui/table.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = TableBody;
TableBody.displayName = "TableBody";
const TableFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/ui/table.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = TableFooter;
TableFooter.displayName = "TableFooter";
const TableRow = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/ui/table.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = TableRow;
TableRow.displayName = "TableRow";
const TableHead = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/ui/table.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = TableHead;
TableHead.displayName = "TableHead";
const TableCell = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c12 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/ui/table.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c13 = TableCell;
TableCell.displayName = "TableCell";
const TableCaption = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c14 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-4 text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/ui/table.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c15 = TableCaption;
TableCaption.displayName = "TableCaption";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;
__turbopack_context__.k.register(_c, "Table$React.forwardRef");
__turbopack_context__.k.register(_c1, "Table");
__turbopack_context__.k.register(_c2, "TableHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "TableHeader");
__turbopack_context__.k.register(_c4, "TableBody$React.forwardRef");
__turbopack_context__.k.register(_c5, "TableBody");
__turbopack_context__.k.register(_c6, "TableFooter$React.forwardRef");
__turbopack_context__.k.register(_c7, "TableFooter");
__turbopack_context__.k.register(_c8, "TableRow$React.forwardRef");
__turbopack_context__.k.register(_c9, "TableRow");
__turbopack_context__.k.register(_c10, "TableHead$React.forwardRef");
__turbopack_context__.k.register(_c11, "TableHead");
__turbopack_context__.k.register(_c12, "TableCell$React.forwardRef");
__turbopack_context__.k.register(_c13, "TableCell");
__turbopack_context__.k.register(_c14, "TableCaption$React.forwardRef");
__turbopack_context__.k.register(_c15, "TableCaption");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stripe-accounts-list.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StripeAccountsList",
    ()=>StripeAccountsList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
"use client";
;
;
;
;
function StripeAccountsList({ stripeStats }) {
    if (!stripeStats || stripeStats.length === 0) {
        return null;
    }
    const formatCurrency = (value)=>value.toLocaleString('fr-FR', {
            style: 'currency',
            currency: 'EUR',
            maximumFractionDigits: 0
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "col-span-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    children: "Performance par Compte Stripe"
                }, void 0, false, {
                    fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stripe-accounts-list.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stripe-accounts-list.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Compte"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stripe-accounts-list.tsx",
                                        lineNumber: 42,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "MRR"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stripe-accounts-list.tsx",
                                        lineNumber: 43,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "ARR"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stripe-accounts-list.tsx",
                                        lineNumber: 44,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Clients Actifs"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stripe-accounts-list.tsx",
                                        lineNumber: 45,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Tendance (Mois)"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stripe-accounts-list.tsx",
                                        lineNumber: 46,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stripe-accounts-list.tsx",
                                lineNumber: 41,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stripe-accounts-list.tsx",
                            lineNumber: 40,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                            children: stripeStats.map((stat)=>{
                                // Calculate simple trend based on last 2 months if available
                                const lastMonth = stat.monthlyAnalytics[stat.monthlyAnalytics.length - 1];
                                const prevMonth = stat.monthlyAnalytics[stat.monthlyAnalytics.length - 2];
                                let trend = 0;
                                if (lastMonth && prevMonth && prevMonth.endingMRR > 0) {
                                    trend = (lastMonth.endingMRR - prevMonth.endingMRR) / prevMonth.endingMRR * 100;
                                }
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: "font-medium",
                                            children: stat.accountName
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stripe-accounts-list.tsx",
                                            lineNumber: 62,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: formatCurrency(stat.currentSnapshot.mrr)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stripe-accounts-list.tsx",
                                            lineNumber: 65,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: formatCurrency(stat.currentSnapshot.arr)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stripe-accounts-list.tsx",
                                            lineNumber: 66,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: stat.currentSnapshot.activeCustomers
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stripe-accounts-list.tsx",
                                            lineNumber: 67,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    trend > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                        className: "h-4 w-4 text-green-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stripe-accounts-list.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 49
                                                    }, this) : trend < 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                                        className: "h-4 w-4 text-red-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stripe-accounts-list.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 49
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                        className: "h-4 w-4 text-muted-foreground"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stripe-accounts-list.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-sm ${trend > 0 ? 'text-green-600' : trend < 0 ? 'text-red-600' : 'text-muted-foreground'}`,
                                                        children: [
                                                            Math.abs(trend).toFixed(1),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stripe-accounts-list.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stripe-accounts-list.tsx",
                                                lineNumber: 69,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stripe-accounts-list.tsx",
                                            lineNumber: 68,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, stat.accountId, true, {
                                    fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stripe-accounts-list.tsx",
                                    lineNumber: 61,
                                    columnNumber: 33
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stripe-accounts-list.tsx",
                            lineNumber: 49,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stripe-accounts-list.tsx",
                    lineNumber: 39,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stripe-accounts-list.tsx",
                lineNumber: 38,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stripe-accounts-list.tsx",
        lineNumber: 34,
        columnNumber: 9
    }, this);
}
_c = StripeAccountsList;
var _c;
__turbopack_context__.k.register(_c, "StripeAccountsList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Code/solopreneur-tool/apps/web/app/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$hooks$2f$use$2d$clients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/hooks/use-clients.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$hooks$2f$use$2d$devis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/hooks/use-devis.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$hooks$2f$use$2d$factures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/hooks/use-factures.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$hooks$2f$use$2d$recettes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/hooks/use-recettes.ts [app-client] (ecmascript)"); // Assuming this provides non-recurring revenue
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stats-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$dashboard$2f$revenue$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/revenue-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$dashboard$2f$recent$2d$activity$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/recent-activity.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$euro$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Euro$3e$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/lucide-react/dist/esm/icons/euro.js [app-client] (ecmascript) <export default as Euro>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserX$3e$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/lucide-react/dist/esm/icons/user-x.js [app-client] (ecmascript) <export default as UserX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$hooks$2f$use$2d$stripe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/hooks/use-stripe.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$dashboard$2f$stripe$2d$accounts$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/components/dashboard/stripe-accounts-list.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
function DashboardPage() {
    _s();
    const { data: clients } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$hooks$2f$use$2d$clients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClients"])();
    const { data: devisList } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$hooks$2f$use$2d$devis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevisList"])();
    const { data: facturesList } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$hooks$2f$use$2d$factures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFacturesList"])();
    const { data: recettesList } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$hooks$2f$use$2d$recettes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecettesList"])(); // Non-recurring revenue
    const { data: stripeStats, isLoading: isLoadingStripe } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$hooks$2f$use$2d$stripe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStripeStats"])(); // Fetch the new calculated data
    // Helper to format currency
    const formatCurrency = (value)=>value.toLocaleString('fr-FR', {
            style: 'currency',
            currency: 'EUR',
            maximumFractionDigits: 0
        });
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardPage.useMemo[stats]": ()=>{
            const currentYear = new Date().getFullYear();
            const currentMonth = new Date().getMonth();
            const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
            const lastMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;
            let totalRevenue = 0;
            let yearRevenue = 0;
            let monthRevenue = 0;
            let lastMonthRevenue = 0;
            // Calculate non-recurring revenue stats from recettesList
            recettesList?.forEach({
                "DashboardPage.useMemo[stats]": (r)=>{
                    const date = new Date(r.date);
                    const amount = Number(r.amount);
                    totalRevenue += amount;
                    if (date.getFullYear() === currentYear) {
                        yearRevenue += amount;
                    }
                    if (date.getFullYear() === currentYear && date.getMonth() === currentMonth) {
                        monthRevenue += amount;
                    }
                    if (date.getFullYear() === lastMonthYear && date.getMonth() === lastMonth) {
                        lastMonthRevenue += amount;
                    }
                }
            }["DashboardPage.useMemo[stats]"]);
            // --- Non-Recurring Financials ---
            const pendingAmount = facturesList?.filter({
                "DashboardPage.useMemo[stats]": (f)=>f.status === 'pending'
            }["DashboardPage.useMemo[stats]"]).reduce({
                "DashboardPage.useMemo[stats]": (sum, f)=>sum + Number(f.total)
            }["DashboardPage.useMemo[stats]"], 0) || 0;
            const taxDue = yearRevenue * 0.22; // Assuming 22% tax on yearly revenue
            const growthTrend = lastMonthRevenue > 0 ? (monthRevenue - lastMonthRevenue) / lastMonthRevenue * 100 : 0;
            // --- Stripe Analytics Aggregation ---
            // Aggregate all Stripe accounts' MRR/ARR/Customers
            const combinedStripeData = stripeStats?.reduce({
                "DashboardPage.useMemo[stats]": (acc, stat)=>{
                    const currentSnapshot = stat.currentSnapshot;
                    acc.mrr += currentSnapshot.mrr;
                    acc.arr += currentSnapshot.arr;
                    acc.activeCustomers += currentSnapshot.activeCustomers;
                    // Get the latest month's analytics to find the churn rate
                    const latestMonth = stat.monthlyAnalytics.slice(-1)[0];
                    if (latestMonth) {
                        acc.latestCustomerChurnRate = (acc.latestCustomerChurnRate * acc.accountCount + latestMonth.customerChurnRate) / (acc.accountCount + 1);
                    }
                    acc.accountCount++;
                    return acc;
                }
            }["DashboardPage.useMemo[stats]"], {
                mrr: 0,
                arr: 0,
                activeCustomers: 0,
                latestCustomerChurnRate: 0,
                accountCount: 0
            });
            return {
                totalRevenue,
                yearRevenue,
                monthRevenue,
                pendingAmount,
                taxDue,
                growthTrend,
                clientCount: clients?.length || 0,
                devisCount: devisList?.length || 0,
                facturesCount: facturesList?.length || 0,
                // Stripe/Recurring Metrics
                combinedStripeData
            };
        }
    }["DashboardPage.useMemo[stats]"], [
        clients,
        devisList,
        facturesList,
        recettesList,
        stripeStats
    ]);
    // Determine the main MRR/ARR and churn
    const primaryMRR = stats.combinedStripeData?.mrr || 0;
    const primaryARR = stats.combinedStripeData?.arr || 0;
    const primaryChurnRate = stats.combinedStripeData?.latestCustomerChurnRate || 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-lg font-semibold md:text-2xl",
                    children: "Tableau de Bord"
                }, void 0, false, {
                    fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/app/dashboard/page.tsx",
                    lineNumber: 117,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/app/dashboard/page.tsx",
                lineNumber: 116,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
                        title: "MRR Total",
                        value: formatCurrency(primaryMRR),
                        description: "Revenu mensuel récurrent (Stripe)",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"]
                    }, void 0, false, {
                        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/app/dashboard/page.tsx",
                        lineNumber: 122,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
                        title: "ARR Total",
                        value: formatCurrency(primaryARR),
                        description: "Revenu annuel récurrent (Stripe)",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"]
                    }, void 0, false, {
                        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/app/dashboard/page.tsx",
                        lineNumber: 128,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
                        title: "CA du Mois (Non-Récur.)",
                        value: formatCurrency(stats.monthRevenue),
                        description: "Hors abonnements",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$euro$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Euro$3e$__["Euro"],
                        trend: {
                            value: Math.round(stats.growthTrend),
                            isPositive: stats.growthTrend >= 0
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/app/dashboard/page.tsx",
                        lineNumber: 134,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
                        title: "Factures en Attente",
                        value: formatCurrency(stats.pendingAmount),
                        description: "Montant à encaisser",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
                    }, void 0, false, {
                        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/app/dashboard/page.tsx",
                        lineNumber: 144,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/app/dashboard/page.tsx",
                lineNumber: 121,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-7",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$dashboard$2f$revenue$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RevenueChart"], {
                        recettes: recettesList?.map((r)=>({
                                ...r,
                                amount: Number(r.amount)
                            })) || [],
                        stripeStats: stripeStats
                    }, void 0, false, {
                        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/app/dashboard/page.tsx",
                        lineNumber: 154,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$dashboard$2f$recent$2d$activity$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecentActivity"], {
                        factures: facturesList || []
                    }, void 0, false, {
                        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/app/dashboard/page.tsx",
                        lineNumber: 158,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/app/dashboard/page.tsx",
                lineNumber: 153,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$dashboard$2f$stripe$2d$accounts$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StripeAccountsList"], {
                stripeStats: stripeStats
            }, void 0, false, {
                fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/app/dashboard/page.tsx",
                lineNumber: 162,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
                        title: "Clients Actifs (Stripe)",
                        value: stats.combinedStripeData?.activeCustomers || 0,
                        description: "Abonnements en cours",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
                    }, void 0, false, {
                        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/app/dashboard/page.tsx",
                        lineNumber: 166,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
                        title: "Taux de Churn",
                        value: `${primaryChurnRate.toFixed(2)}%`,
                        description: "Moyenne sur tous les comptes",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserX$3e$__["UserX"],
                        trend: {
                            value: primaryChurnRate,
                            isPositive: primaryChurnRate <= 0
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/app/dashboard/page.tsx",
                        lineNumber: 172,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
                        title: "CA Annuel (Non-Récur.)",
                        value: formatCurrency(stats.yearRevenue),
                        description: `Année 2025`,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"]
                    }, void 0, false, {
                        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/app/dashboard/page.tsx",
                        lineNumber: 182,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
                        title: "Charges Estimées",
                        value: formatCurrency(stats.taxDue),
                        description: "URSSAF (22% estimé)",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"]
                    }, void 0, false, {
                        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/app/dashboard/page.tsx",
                        lineNumber: 188,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/app/dashboard/page.tsx",
                lineNumber: 165,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Code/solopreneur-tool/apps/web/app/dashboard/page.tsx",
        lineNumber: 115,
        columnNumber: 9
    }, this);
}
_s(DashboardPage, "Af/KDMsxjGP23aEZZFnF7H0rb/s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$hooks$2f$use$2d$clients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClients"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$hooks$2f$use$2d$devis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevisList"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$hooks$2f$use$2d$factures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFacturesList"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$hooks$2f$use$2d$recettes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecettesList"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$hooks$2f$use$2d$stripe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStripeStats"]
    ];
});
_c = DashboardPage;
var _c;
__turbopack_context__.k.register(_c, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Code_solopreneur-tool_apps_web_a6583b57._.js.map