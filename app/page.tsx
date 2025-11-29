"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ConnectionForm } from "./connection-form";


export default function LandingPage() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md">
        <Card className="shadow-xl border rounded-2xl p-2">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold">
              Solopreneur Tool
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-center text-gray-600 mb-6">
              Votre outil privé de gestion micro‑entreprise
            </p>

            <ConnectionForm />

          </CardContent>
        </Card>
      </div>
    </div>
  );
}
