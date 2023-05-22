import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.REACT_APP_API_URL;

export const companiesApi = createApi({
  reducerPath: "companies",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
        headers.set("content-type", "application/json");
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMe: builder.query({ query: () => "me" }),
    fetchCompanies: builder.query({
      query: ({ search, pageIndex, pageSize }) => {
        const queryParams = [];
        if (search) queryParams.push(`Search=${search}`);
        if (pageIndex) queryParams.push(`PageIndex=${pageIndex}`);
        if (pageSize) queryParams.push(`PageSize=${pageSize}`);

        return `companies${
          queryParams.length ? `?${queryParams.join("&")}` : ""
        }`;
      },
    }),
    createCompany: builder.mutation({
      query: (data) => ({
        url: "companies",
        method: "POST",
        body: data,
      }),
    }),
    updateCompany: builder.mutation({
      query: ({ id, data }) => ({
        url: `companies/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteCompany: builder.mutation({
      query: ({ id }) => ({
        url: `companies/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetMeQuery,
  useFetchCompaniesQuery,
  useCreateCompanyMutation,
  useUpdateCompanyMutation,
  useDeleteCompanyMutation,
} = companiesApi;
