import styled from "styled-components";

const Wrapper = styled.div`
    width: 100vw;
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
`;

const Card = styled.div`
    width: 100%;
    max-width: 350px;
    padding: 40px 32px;
    box-sizing: border-box;
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
`;

const Title = styled.h1`
    font-size: 26px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 24px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    padding: 14px;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid #dddddd;
    font-size: 16px;
    
    &:focus {
        outline: none;
        border-color: #6c5ce7;
    }
`;

const ErrorText = styled.span`
    color: #d63031;
    font-size: 12px;
    margin-top: 4px;
`;

const Button = styled.button`
    padding: 14px;
    background-color: #6c5ce7;
    color: #ffffff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    
    &:hover {
        background-color: #574bd6;
    }
`;

function SignUp() {
    return (
        <Wrapper>
            <Card>
                <Title>회원가입</Title>

                <Form>
                    <InputGroup>
                        <Input placeholder={"아이디"} />
                        <ErrorText>에러메세지</ErrorText>
                    </InputGroup>
                    <InputGroup>
                        <Input
                            type={"password"}
                            placeholder={"비밀번호"} />
                        <ErrorText>에러메세지</ErrorText>
                    </InputGroup>
                    <InputGroup>
                        <Input placeholder={"이름"} />
                        <ErrorText>에러메세지</ErrorText>
                    </InputGroup>
                    <InputGroup>
                        <Input placeholder={"이메일"} />
                        <ErrorText>에러메세지</ErrorText>
                    </InputGroup>
                    <Button>회원가입</Button>
                </Form>
            </Card>
        </Wrapper>
    );
}

export default SignUp;
