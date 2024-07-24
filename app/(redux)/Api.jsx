import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  reducerPath: "Api",
  tagTypes: ['Post'],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Post' , id })),
              { type: 'Post', id: 'LIST' },
            ]
          : [{ type: 'Post', id: 'LIST' }],
    }),
    addContact: builder.mutation({
      query: (initialContact) => ({
        url: "/contacts",
        method: "POST",
        body: initialContact,
      }),
      invalidatesTags: [{ type: 'Post', id: 'LIST' }],
    }),
    getContact: builder.query({
      query: (contactId) => `/contacts/${contactId}`,
      providesTags: (result, error, id) => [{ type: 'Post', id : "LIST" }],
    }),
      upDateContact: builder.mutation({
      query: (initialContact) => ({
        url: `/contacts/${initialContact.contactId}`,
        method: "PUT",
        body: initialContact,
      }),
      invalidatesTags: [{ type: 'Post', id: 'LIST' }],
    }),
    DeleteContact: builder.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method:"DELETE"
           
      }),
      invalidatesTags: [{ type: 'Post', id: 'LIST' }],
    }),
    
  })
  ,

});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useGetContactQuery,
  useUpDateContactMutation,
  useDeleteContactMutation,
} = Api;