import styles from './Signin.module.css';
import React, { useRef } from 'react';
import { Row, Col, Input, Button } from 'antd';
import { LoginReqType } from '../types';

interface SigninProps {
  login: (reqData: LoginReqType) => void;
}

const Signin: React.FC<SigninProps> = ({ login }) => {
  const eamilRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);

  const onSignin = () => {
    const email = eamilRef.current!.input.value;
    const password = passwordRef.current!.input.value;
    login({ email, password });
  };
  return (
    <Row align="middle" className={styles.signin_row}>
      <Col span={24}>
        <Row className={styles.signin_contents}>
          <Col span={12}>
            <img
              src="/bg_signin.png"
              alt="Signin"
              className={styles.signin_bg}
            />
          </Col>
          <Col span={12}>
            <div className={styles.signin_title}>My books</div>
            <div className={styles.signin_subtitle}>
              Please Note Your Opinion
            </div>
            <div className={styles.signin_underline} />
            <div className={styles.email_title}>
              Email
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.input_area}>
              <Input
                placeholder="Email"
                autoComplete="email"
                name="email"
                className={styles.input}
                ref={eamilRef}
              ></Input>
            </div>
            <div className={styles.password_title}>
              Password
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.input_area}>
              <Input
                type="password"
                autoComplete="Password"
                className={styles.input}
                ref={passwordRef}
              ></Input>
            </div>
            <div className={styles.button_area}>
              <Button size="large" className={styles.button} onClick={onSignin}>
                Sign in
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Signin;
