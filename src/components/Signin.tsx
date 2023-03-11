import styles from './Signin.module.css';
import { Row, Col, Input, Button } from 'antd';

export default function Signin() {
  return (
    <Row align="middle" className={styles.signin_row}>
      <Col span={24}>
        <Row className={styles.signin_contents}>
          <Col span={12}></Col>
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
                name="email"
                className={styles.input}
              ></Input>
            </div>
            <div className={styles.button_area}>
              <Button size="large" className={styles.button}>
                Sign in
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
