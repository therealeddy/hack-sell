import styled from 'styled-components'

export const ProductContainer = styled.div`
  padding-top: 10rem;
  .product {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
    gap: 4rem;

    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
    .product-image {
      width: 100%;
      padding: 0.25rem;

      display: flex;
      align-items: center;
      justify-content: center;

      img {
        object-fit: contain;
      }
    }
    .product-info {
      display: flex;
      flex-direction: column;

      h1 {
        font-size: 2.5rem;
        color: ${({ theme }) => theme.gray300};
      }

      span {
        margin-top: 1rem;
        display: block;
        font-size: 2rem;
        color: ${({ theme }) => theme.green300};
      }

      p {
        margin-top: 2.5rem;
        font-size: 1rem;
        line-height: 1.6;
        color: ${({ theme }) => theme.gray300};
      }

      button {
        margin-top: auto;
        border: 0;
        border-radius: 8;
        padding: 1.25rem;
        cursor: pointer;
        font-weight: bold;
        font-size: 1rem;

        background-color: ${({ theme }) => theme.green500};
        color: ${({ theme }) => theme.white};
        &:hover {
          background-color: ${({ theme }) => theme.green300};
        }
      }
    }
  }
`
