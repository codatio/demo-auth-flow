'use server'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const createCompany = async (authHeader) => {
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

export const getOrganization = async (authHeader) => {
  const body = {
    authHeader,
  }

  const response = await fetch( 
    `${baseUrl}/api/getOrganization`,
    { 
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json', 
        'Auth-Header': authHeader,
      },
    }
  );

  const responseBody = (await response.json());

  return responseBody;
}

