// pages/dynamic.tsx

import { NextPage } from "next"
import { useEffect, useState } from "react"
import { Col, Container, Row } from "reactstrap"

interface ApiResponse {
    name: string
    timestamp: Date
}
const Dynamic: NextPage = () => {
    const[clienteSideData, setClienteSideData] = useState<ApiResponse>()

    useEffect(() => {
        fechtData()
    }, [])

    const fechtData = async() => {
        const data = await fetch("/api/hello").then(res => res.json())
        setClienteSideData(data)
    }
  return (
    <Container tag="main">
      <h1 className="my-5">
        Como funcionam as renderizações do Next.js
      </h1>

      <Row>
        <Col>
          <h3>
            Gerado no servidor:
          </h3>
        </Col>

        <Col>
          <h3>
            Gerado no cliente:
          </h3>
          <h2>
            {clienteSideData?.timestamp.toString()}
          </h2>
        </Col>
      </Row>
    </Container>
  )
}

export default Dynamic