import styled from 'styled-components'

export const SuccessContainer = styled.div`
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    height: 656px;

    h1 {
      font-size: 3rem;
      color: ${({ theme }) => theme.gray100};
    }

    p {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.gray300};
      max-width: 560;
      text-align: center;
      margin-top: 2rem;
      line-height: 1.4;
    }

    a {
      display: block;
      margin-top: 5rem;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.green500};
      text-decoration: none;
      font-weight: bold;

      &:hover {
        color: ${({ theme }) => theme.green300};
      }
    }
    .image-product {
      width: 100%;
      max-width: 130px;
      height: 145px;
      padding: 0.25rem;
      margin-top: 4rem;

      display: flex;
      align-items: center;
      justify-content: center;

      img {
        object-fit: contain;
      }
    }
  }
`
