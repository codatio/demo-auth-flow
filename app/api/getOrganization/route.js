import { NextResponse } from "next/server";

import { CodatPlatform } from "@codat/platform";
import { CreateCompanyResponse } from "@codat/lending/dist/sdk/models/operations";

export async function GET(
  req,
  res
) {
  const authHeader = req.headers.get('auth-header')

  const sdk = new CodatPlatform({
    security: {
      authHeader: authHeader,
    },
  });

  const result = await sdk.settings.getProfile();

  if (result.statusCode !== 200) {
    throw new Error("Failed to get profile");
  }

  return NextResponse.json({ 
    icon: result.profile.iconUrl,
    logo: result.profile.logoUrl,
    companyName: result.profile.name,
  });
} 