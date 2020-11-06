import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from "../img/logo.png";


const HeaderContainer = styled.div`
  display: flexbox;
  align-items: center;
  justify-content: center;
`

const InputBusca = styled.input`
  border-radius: 4px;
  -moz-border-radius: 4px;
  height: 30px;
  background-color:#43ADA5;

  &::placeholder{
    color: white;
    font-weight: bold;
  }
`

const Busca = styled.div`
  position: absolute;
  top: 30px;
  right: 300px;
`

const H1 = styled.h1`
  margin-right: 30px;
`

const ButtonFull = styled.button`
    width: 250px;
    background-color: #43ADA5;
    color: white;
    font-size: 18px;
    outline: none;
    font-weight: bold;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 10px;
    transition: 400ms;
    cursor: pointer;

    &:hover {
    background-color: white;
    color: #43ADA5;
    border: 2px solid #43ADA5;
  }
`


class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <img src={ Logo }></img>
        <Busca>
        <InputBusca type="text" placeholder="BUSCA" size="80"></InputBusca>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///8AAADf39/b29v6+vry8vL29vbt7e38/Pzc3NysrKzq6urKysqmpqaNjY13d3fR0dEjIyObm5ssLCxBQUG8vLzFxcUMDAweHh6goKDk5ORqampSUlKEhIQzMzNvb298fHyysrI/Pz9LS0sUFBRbW1taWlqIiIgoKCg4ODgYGBhJSUljY2Oml1QqAAALeklEQVR4nN1d52LiMAymEEbZo2GvtJTS8f7Pd6Vc75rEn2zZcpz0+w1O5Mjakmu1QIhajXg1PG7O76+X091iOXvYfox20+68HXVCvZMUOut4ONqe7iD2m91q3A79mrZoJJs9pu0HFtthvxn6bblYdz8WRtT9/5rDeeiXNkdv9cqj7hujfhT63Q3Q657tyPvCZDcOTYAGsQt5N8yG69BUQDSnzuTdsC3nkayPhOi7Yp+U7kQ2DoL0XTHrlsoa6H0I03fFshuarH9o7jzQ90VjPzRpN6w80XfFuRGaulpt/OiRwE8MA9MXSQpQNSZBWbXvnb4rDsE0R+RLwmQxC/QZ65eCCPzESwgCu8XR94mHwh3Ijn8Rk8aiYE5tW3qALpgWSWCD6cDL4FgcgXEI+j7xXJTaGFi/4mLy+v44W1r//7EYeWPh5+4Pw+643W42W1GtE7Wa7fY6nu62fF5fFkHikPlOh6QH1+r0pw+85RZ4MSkcGa8zGcX6mEs0nj5xSKx7JpDxBQ/zlumqa8an9PwVjX3Bc2xM3g11471b+DyLppbayCogmJglAXyKGzM9eBpa89F8a/SER1960cwbXDnt8NiIxmcpktKomzz74MxBRoxydCcnj5aBO/guEjgykTk+zHB9SPQkFeBcG4Rf5Z0pva12FszlJtqniesMvZQx4ZtOqzGex8mgm8TzcZ2SiGutA/ogRdoNPZ2RfNHl/Xrx8Ji1zt7Ou2kffXltmEs2dqOzHDekBVOPR4RV9vSiplIrVCWPou4QUoHp3srAVHlPFJmmteZPMznF39M8agD/2RwYm9SbeY7IlmZvDmIUang0Rv+rc1ytT3tzlf0oLY2FI8WnGnsbPabBTyrOshZ7h15jIkOghkeBGXNvZkRnkfNv6dyyTGaKLq9Qa4kmjz//I+8Z0V9Rwkyck09QV00M7OOpua/SIZnhLEDhjHpAovqH3h6hkNOstER1FzakmFFaao4pm7xkblE/X7oSGE2I1XeKP7RcyzIUwoNU/a4ODRV6elf8fmwf0P4LlRqnDLilW91NixIZCmtSIKMxUr0HZYa7fUTK3VaYMhKFJ2ovjBBeTuZph3iTY/7nLwIEAuFIHUWlQDcEIRZf8zsnUtq2AMcqwX/ZO1BI6MK8MSGT94Z+CiGj7Ys1CXPmmPuxEYvOnjYv00GcDIa7j3eVItrClyH4FP9Jh2e8aM7yMIhUDfu9FGs31/ExI0FmRHyJkHq2VcXEruUktM6QeQaZmk578OMobEmxiFe3dTGwEsrFucYkeZcB+eb14Y3IrcbGxMp2ZkdgB/e6ZF2mFtEWc/cAYwD/cT/uj/UBUOxl2FX44++Sc1mIA7s0oM/9jVQWsh7Yic1yEyFlpqLV2vAjTqzsGvjWr5kf4q19EG6dwOrLxk3Ecfws38GAoXxFIXSGlfa6BtBEuWR+CAuIPPSFJHDb+Wth1zejC5vgZwsvReiQQv52NuBaGakO7MW9n6IQaNjwlT7kvU36d+C4vnmql4Cp9qz402ODlsrIGRBN9dZ/BsUad0tb6Bi+pTUP0BT+SrOg7uXqC8gNGbGstmYE7ZgsoDvAPYjwGKa36l75G6+V9SgRxnUSYUQi/TOlIBXOsGeA2PTELJRAxzC9U+potN8uV2gjMv0LtEw61qe0Ez3X1Efo1XAmWgUoaNIbpTqte9+9n0hf8Dwo6E6ndYXKwvDe+YEO4kb/1x9AwetMUaAiOvMoSIsayOl5ZTEPsmgySkfxMP+N5jAQz/KCUSg4E0DPP4xvHvKBskUsdYG2KesR5cJxRcwKQLEMzrOhRM6quqxzyDvtlkDRdU6aDRWYTHIGfFojcu0KOyBhylHEyP19yv/0J4lUTF4QKB7FUYhIIH8oftv7di9OLwW1liEO40Sj0C6p17ifHrYfx0Fhfaxtxv4jIJMmSMNxDohCjv+EvMNCG1UhUHSP47WhXBnPfPeFFqho4WSgEIUeoxMMRMDi4pRHIQrLMd2oA4aNLBhrJKWmsPYOXo+xBKKwJFwKyodOjDUQhS61OXJAHVjZlBEFpA9X3t6agybIqXM8N2TThB74cwPSh6paSQQUsbNLl0sD2TScimh1KFuyhcMFiEKOcyqxS/6AfLsjZxGwBi+c5QvIHmFJCSCtCpjZYACUB2ZJelTz4HtkgxFQ1ohlj6B4aSnMNrT9rNIIFPMuhYMI3i1fEUoBGTVHP+/MAgrTvLHCRGiVWQmEaQLejZkERpxQguniSNAwC79Qkq4E3gXqymEazaj0MrxlCosxmM4rirZxIgV+AJO3zPIBuFPBDyKqmeRalBFSq6EDirBYi532QhLLfxabBiwTZsvABK0U2DSFpUzsclZYbxLWcIMds5xA21+gVL7fmi4doCTlJJ7+AjYjBB2xDYcDWHSSwvoxm7J4KeBWLJtiOrhYQJUIGwisqlxgQ2G4PCke0WEVq8bV+syRiHLALYh2ASTYoBJKYaBwvnWYE+7YMtBHxM3wlj35eIxgmPwFylfc2TIp1T4d5Dof3A1vHYvH7Wuehk+SwJLPIXOLJ8MEuK0A5bbvbBrXvoF7i4VmUDFAdIu7yHY/q9qgTTRTu9SbER2+BV+QRszjcjKUCQHNCzG7ghrZ4OaTExNnikyXUhMNHBPTETFbt7igFDnh19VfpQZeFOYLw3bPOyvnPgNiRs1bQSlhcnSy+ztQ83UvhZjg5H0aEmkGaqpfEWEpen6YRO01OSTZ/RQ4PV6mDg0V19zgOy5F2Nt3UhF4mkLPJNKjfYQMq4R+iFdGpUeLCu2u/sKAB28SVbe5IoajyY0IF096UTc/TMRJNbud682LdaObyi6ScTe60+IKeRu1Tfj0X7hI8KgxgZ+ehrAzpZ8TKpHIRIW0SrxJusSRfpa0xGUa98yJznKBjYZ+1rKEomCw6F8IXfvaMhgGLlHLyyfwE88CoWKTWdILgQwfbQ9iDB3V/9joMgUB7VS3nqq+nDrQ2KdH3H9DoDvJikX/4cWSh2LDYe4CypelJlQY8dmo2TW9X1hAZktcpPow5WjkKKaCTWkIpPbcWPQ/HgeG3NofvZmveiwPgVcsdkmb1FzReMq76kPgC9qqCYjZcTqv93J0NteNZEiMdlVDIC7DNdUMsXg9H3bDVRLP5/Fg+jL6eKIuXYAQMEYlWVQewfWgbwiYvWHu2zbERcAhtDfVCsCHQLyr1Cwq4Xw6m2oesZDwPMt8Bp8kwpVlZlGR8EiJCRT5gPKmmhxkLqi1N9W6vXbf7pY8M5xlEgb2LHpTwn3ybjYHzIT6ju3VxP33Eompf87BROoGZXs18SNUEUlcZpXCIndnpy1cWfQbTf1dOhy4RiXlCbwiNrgX1wizrlxHtbWaUF990He9G/CKZ8m5BiJnMIX60O1DnnaiNeSSLPpj2+xvmDuOZRv+/RB4xfjIV5GTkXjxuL2pZhLRricHc36dbAYN+Ypce1PtXr/4F6L14KhPJU0Og7qXehV/LJpBL15t9so69NlmFftrK7Y21WxvyGk3+vMkSbrd7mAQz/uNnuc6cXk1UTIUxqKh8OsJFDbVyodffwZxu7AOFWFR8i5xEqaKPjSs40YVYVH7e4mr8gU1hdMYFTmD1P2wJKqiJvSFxQiVIdDWlqkKi1rf714dAjXdLwDVOYNkyyuBChFIDBAgUB0WtWTSqij6L+hbGPKoEovq24gUqBKL1vANnr+GQLagqZKauIEbaK8cgfD2VICqsWgND+D9NQTWwBU7alSPRWs8u7tSiv4fTFqmKsyiNWpwZAaLan7BGjktK4VKnsEvGLJpRVn0io6RVVNhAo1iidUz1dLQx4MrTqBW2ExKcVWOEyKyNmJb6Aw2T2gRJIac8iyICDHqqRQXAYlALW52JbhCRgzzvF48VFoL5tHpplh1vwp+L4cHrLuHx+Vktn+axr+GvD8ZpKJ5gVkajgAAAABJRU5ErkJggg==" width="35px" height="35px"></img>
        </Busca>
        <H1>HOME</H1>
        <H1>PRODUTOS</H1>
        <H1>CARRINHO</H1>
        <ButtonFull type="submit">LOGOUT</ButtonFull>
    </HeaderContainer>
    )
  }
}

export default Header;