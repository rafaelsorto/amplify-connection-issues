/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStore = /* GraphQL */ `
  mutation CreateStore(
    $input: CreateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    createStore(input: $input, condition: $condition) {
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
export const updateStore = /* GraphQL */ `
  mutation UpdateStore(
    $input: UpdateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    updateStore(input: $input, condition: $condition) {
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
export const deleteStore = /* GraphQL */ `
  mutation DeleteStore(
    $input: DeleteStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    deleteStore(input: $input, condition: $condition) {
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
export const createStoreLocation = /* GraphQL */ `
  mutation CreateStoreLocation(
    $input: CreateStoreLocationInput!
    $condition: ModelStoreLocationConditionInput
  ) {
    createStoreLocation(input: $input, condition: $condition) {
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
export const updateStoreLocation = /* GraphQL */ `
  mutation UpdateStoreLocation(
    $input: UpdateStoreLocationInput!
    $condition: ModelStoreLocationConditionInput
  ) {
    updateStoreLocation(input: $input, condition: $condition) {
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
export const deleteStoreLocation = /* GraphQL */ `
  mutation DeleteStoreLocation(
    $input: DeleteStoreLocationInput!
    $condition: ModelStoreLocationConditionInput
  ) {
    deleteStoreLocation(input: $input, condition: $condition) {
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
export const deleteCart = /* GraphQL */ `
  mutation DeleteCart(
    $input: DeleteCartInput!
    $condition: ModelCartConditionInput
  ) {
    deleteCart(input: $input, condition: $condition) {
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
export const createCart = /* GraphQL */ `
  mutation CreateCart(
    $input: CreateCartInput!
    $condition: ModelCartConditionInput
  ) {
    createCart(input: $input, condition: $condition) {
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
export const updateCart = /* GraphQL */ `
  mutation UpdateCart(
    $input: UpdateCartInput!
    $condition: ModelCartConditionInput
  ) {
    updateCart(input: $input, condition: $condition) {
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
