/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStore = /* GraphQL */ `
  query GetStore($id: ID!) {
    getStore(id: $id) {
      id
      name
      locations {
        items {
          id
          name
          storeID
          merchant
          staff
          createdAt
          updatedAt
        }
        nextToken
      }
      merchant
      staff
      createdAt
      updatedAt
    }
  }
`;
export const listStores = /* GraphQL */ `
  query ListStores(
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        locations {
          nextToken
        }
        merchant
        staff
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStoreLocation = /* GraphQL */ `
  query GetStoreLocation($id: ID!) {
    getStoreLocation(id: $id) {
      id
      name
      storeID
      store {
        id
        name
        locations {
          nextToken
        }
        merchant
        staff
        createdAt
        updatedAt
      }
      merchant
      staff
      createdAt
      updatedAt
      carts {
        items {
          id
          storeLocationID
          currency
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listStoreLocations = /* GraphQL */ `
  query ListStoreLocations(
    $filter: ModelStoreLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStoreLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        storeID
        store {
          id
          name
          merchant
          staff
          createdAt
          updatedAt
        }
        merchant
        staff
        createdAt
        updatedAt
        carts {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getCart = /* GraphQL */ `
  query GetCart($id: ID!) {
    getCart(id: $id) {
      id
      storeLocationID
      storeLocation {
        id
        name
        storeID
        store {
          id
          name
          merchant
          staff
          createdAt
          updatedAt
        }
        merchant
        staff
        createdAt
        updatedAt
        carts {
          nextToken
        }
      }
      items {
        id
        title
        quantity
        weight
        tags
        total
        createdAt
        updatedAt
      }
      currency
      createdAt
      updatedAt
    }
  }
`;
export const listCarts = /* GraphQL */ `
  query ListCarts(
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        storeLocationID
        storeLocation {
          id
          name
          storeID
          merchant
          staff
          createdAt
          updatedAt
        }
        items {
          id
          title
          quantity
          weight
          tags
          total
          createdAt
          updatedAt
        }
        currency
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
