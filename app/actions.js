'use server'

export const createCompany = async (authHeader) => {
  console.log('did', authHeader)

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const response = await fetch( 
    `${baseUrl}/api/createCompany`, 
    //`/api/createCompany`, 
    { 
      method: 'POST',
      body: {
        name: 'Locally created company',
        description: 'created',
        authHeader,
      }
    }
  );

  // if (response.status !== 201) {
  //   throw new Error("Failed to create company");
  // } 
  const responseBody = (await response.json());
  console.log(responseBody)
  return responseBody.id;
}