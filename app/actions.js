'use server'

export const createCompany = async (authHeader) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const body = {
    name: 'Locally created company',
    description: 'created',
    authHeader,
  }

  const response = await fetch( 
    `${baseUrl}/api/createCompany`,
    { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }
  );

  const responseBody = (await response.json());

  return responseBody.companyId;
}