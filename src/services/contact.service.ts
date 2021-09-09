import { Contact } from "../types/contact.type";

function _handleResponse(res: Response) {
  // unfulfilled promise & error handling for non json response bodies
  const body = res.json();

  if (res.ok) return body;

  return body.then((err) => {
    throw err;
  });
}

function _handleError(err: Error) {
  // TODO report error
  console.error(err);
  throw err;
}

function callListRequest() {
  return fetch("https://63rplm.acquire.io/api/v1/crm/objects/contact", {
    method: "GET",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization:
        "Bearer 63rplm:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1IjpbMjgsMTM0XSwidCI6ImRCN3NZTm1GUGFMN1E1NHEweWVoOUM3WHZVQXdiT0h5IiwiaWF0IjoxNjMwMDExMzAzfQ.PeNGdhe749tG0CQLuKU21EoPmdrMrGpM4FGQ3jc-ZIk",
    },
  })
    .then(_handleResponse)
    .catch(_handleError);
}

export const list = async (): Promise<Contact[]> => {
  const response = await callListRequest();

  const contacts: Contact[] = response.data.data.map((c: any) => ({
    name: c.fields.name,
    email: c.fields.email,
    phone: c.fields.phone,
  }));

  return contacts;
};

export default {
  list,
};
