import styled from 'styled-components'

export const Container = styled.div`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 5px;
  height: 100%;
  padding: 21.6px 21.6px 25px 21.6px;
`

export const Title = styled.h4`
  margin-top: 21px;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.white};
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`

export const Text = styled.p`
  color: ${props => props.theme.colors.white};
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
`

export const Image = styled.img`
  width: 100%;
  height: 202px;
  object-fit: cover;
  object-position: center;
`
