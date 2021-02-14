import styled from "styled-components";

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-top: 80px;
  max-width: 450px;
  line-height: 56px;
`;

export const Form = styled.form`
  margin: 40px 0 25px 0;

  display: flex;
  position: relative;

  input {
    flex: 1;
    flex: 1;
    height: 70px;
    padding: 0 70px 0 24px;
    border: 0;
    border-radius: 40px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;
    transition: border-color 0.2s;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    position: absolute;
    right: 20px;
    top: 0;
    bottom: 0;
    border: 0;
    background-color: transparent;
    height: 70px;
    width: 50px;
    padding: 0;
    margin: auto;

    svg {
      fill: #3a3a3a;
    }
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: calc(50% - 30px);
  margin: 15px;
  background-color: #7bcea4;
  color: #fff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 20px 25px -10px rgb(0 0 0 / 15%);
  overflow: hidden;

  padding: 15px;
  position: relative;

  & > span {
    position: absolute;
    bottom: -15px;
    right: 10px;
    opacity: 0.3;
    display: block;
    font-weight: bold;
    font-size: 60px;
    letter-spacing: 2px;
  }

  img {
    max-width: 125px;
    padding-right: 15px;
  }

  h3 {
    font-size: 40px;
    margin-bottom: 5px;
  }

  .badge {
    img {
      max-width: 35px;
      padding: 8px;
      background: linear-gradient(to bottom, #ffffff 0%, #f7f7f7 100%);
      border-radius: 50%;
      box-shadow: 0 20px 25px -10px rgb(0 0 0 / 15%);
      margin: 0 8px 0 0;
    }
  }
`;
