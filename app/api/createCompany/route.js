import { NextResponse } from "next/server";

import { CodatLending } from "@codat/lending";
import { CreateCompanyResponse } from "@codat/lending/dist/sdk/models/operations";

export async function POST(
  req,
  res
) {
  console.log('boo')
  const request = await req.json();

  const {
    authHeader, 
    name, 
    description
  } = request

  const sdk = new CodatLending({
    security: {
      authHeader: authHeader,
    },
  });

  const result = await sdk.companies
    .create({
      description,
      name: name || 'New company',
    })

  console.log('foo', result.company, companyId)

  if (result.statusCode == 402) {
    throw new Error("Free trial limits hit. Please delete a company.");
  }

  if (result.statusCode !== 200) {
    throw new Error("Failed to create company");
  }

  const companyId = result.company.id
  console.log('foo', result.company, companyId)

  NextResponse.json({ companyId: companyId });
} 