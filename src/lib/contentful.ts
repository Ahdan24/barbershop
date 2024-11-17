import { createClient, FieldsType } from "contentful";

interface ResponseEntry {
    sys: {id: string}
    fields: FieldsType
}

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

export const getEntries = async (page: number =  1) => {
  try {
    const limit = 4
    const skip = (page - 1) * limit
    const response = await client.getEntries({
      content_type: "barber",
      limit,
      skip,
    });

    const barbers = response.items.map((barber: ResponseEntry) => {
      return {
        entryId: barber.sys.id,
        title: barber.fields.title,
        description:barber.fields.description,
        thumbnail:"https:" + barber.fields.thumbnail.fields.file.url,
        price:barber.fields.price,
        content:barber.fields.content,
      };
    });

    return {
        data:barbers, 
        meta: {total: response.total, limit: response.limit}
    }

  } catch (error) {
    console.log(error);
  }
};

export const getEntry = async (entryId: string) => {
try {
  const response: ResponseEntry =await client.getEntry(entryId);
  return {
    entryId: response.sys.id,
        title: response.fields.title,
        description:response.fields.description,
        thumbnail:"https:" + response.fields.thumbnail.fields.file.url,
        price:response.fields.price,
        content:response.fields.content,
  }
} catch (error) {
  console.log(error);
  
}
}
