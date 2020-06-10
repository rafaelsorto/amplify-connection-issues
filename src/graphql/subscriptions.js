/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStore = /* GraphQL */ `
  subscription OnCreateStore($merchant: String, $staff: String) {
    onCreateStore(merchant: $merchant, staff: $staff) {
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
export const onUpdateStore = /* GraphQL */ `
  subscription OnUpdateStore($merchant: String, $staff: String) {
    onUpdateStore(merchant: $merchant, staff: $staff) {
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
export const onDeleteStore = /* GraphQL */ `
  subscription OnDeleteStore($merchant: String, $staff: String) {
    onDeleteStore(merchant: $merchant, staff: $staff) {
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
export const onCreateStoreLocation = /* GraphQL */ `
  subscription OnCreateStoreLocation($merchant: String, $staff: String) {
    onCreateStoreLocation(merchant: $merchant, staff: $staff) {
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
export const onUpdateStoreLocation = /* GraphQL */ `
  subscription OnUpdateStoreLocation($merchant: String, $staff: String) {
    onUpdateStoreLocation(merchant: $merchant, staff: $staff) {
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
export const onDeleteStoreLocation = /* GraphQL */ `
  subscription OnDeleteStoreLocation($merchant: String, $staff: String) {
    onDeleteStoreLocation(merchant: $merchant, staff: $staff) {
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
export const onCreateCart = /* GraphQL */ `
  subscription OnCreateCart {
    onCreateCart {
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
export const onUpdateCart = /* GraphQL */ `
  subscription OnUpdateCart {
    onUpdateCart {
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
export const onDeleteCart = /* GraphQL */ `
  subscription OnDeleteCart {
    onDeleteCart {
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
