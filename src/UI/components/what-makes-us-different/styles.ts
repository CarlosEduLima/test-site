import styled from 'styled-components'
import colors from '../../../utils/colors'
import fonts from '../../../utils/fonts'
import Image from 'next/image'

export const Title = styled.h1`
  font-family: ${fonts.extraBold};
  color: ${colors.black};
  font-size: 30px;
`
export const Container = styled.div`
  margin: 45.5px auto 64px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Divider = styled.div`
  width: 124px;
  height: 0;
  border: 1px solid ${colors.LightBlue};
`
export const ContentLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`
export const SubContent = styled.div`
  align-self: flex-end;
  flex: 1;
  max-width: 500px;
`
export const SubContentLeft = styled(SubContent)`
  text-align: right;
`
export const SubContentRight = styled(SubContent)`
  text-align: left;
`
export const SubTitle = styled.h1`
  font-size: 25px;
  font-family: ${fonts.bold};
  color: ${colors.purple};
`
export const Text = styled.p`
  font-size: 25px;
  font-family: ${fonts.heading};
  color: ${colors.black};
  margin-bottom: 55px;
`
export const ThisImage = styled(Image)`
  width: 545px;
`