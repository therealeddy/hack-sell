import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: block;
  padding-top: 10rem;
  h1 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 6rem;
    margin-bottom: 3rem;
  }
  .products {
    display: flex;
    .product {
      display: block;
      margin: 0 15px;
      border: 2px solid ${({ theme }) => theme.gray500};
      border-radius: 10px;
      padding: 20px;
      width: 25%;
      img {
        display: block;
        margin: 0 auto;
        object-fit: contain;
        margin-bottom: 20px;
      }
      .info {
        margin-bottom: 20px;
        .name {
          font-weight: 600;
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }
        .price {
          display: block;
          width: 100%;
          color: ${({ theme }) => theme.red500};
          font-weight: 600;
          font-size: 2rem;
        }
      }
      a {
        display: flex;
        text-decoration: none;
        width: 100%;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        padding: 10px;
        border-radius: 10px;
        transition: all 0.2s linear;

        background-color: ${({ theme }) => theme.green500};
        color: ${({ theme }) => theme.white};
        &:hover {
          background-color: ${({ theme }) => theme.green300};
        }
      }
    }
  }
`
