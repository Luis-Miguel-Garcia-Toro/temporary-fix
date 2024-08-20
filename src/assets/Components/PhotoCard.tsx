import React from "react";
import { Card, Col } from "antd";

interface ClientData {
  clientId: string;
  region: string;
  razonSocial: string;
  nombreBodega: string;
  nombreMision: string;
  nombreRegional: string;
  vendorCode: string;
  veredicto?: string | null;
  zonaRDV?: string | null;
}

interface PhotoCardProps {
  photoUrl: string;
  clientData: ClientData;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photoUrl, clientData }) => {
  return (
    <Col xs={24} sm={12} lg={8}>
      <Card
        hoverable
        cover={
          <img
            alt="Foto"
            src={`data:image/jpeg;base64,${photoUrl}`}
            style={{ height: 500 }}
          />
        }
      >
        <Card.Meta
          //title={`Cliente: ${clientData.clientId}`}
          description={
            <div>
              <p style={{ margin: 0 }}>
                <strong>Cod Cliente:</strong> {clientData.clientId}
              </p>

              <p style={{ margin: 0 }}>
                <strong>Zona:</strong>{" "}
                {clientData.zonaRDV ? clientData.zonaRDV : "Sin Zona"}
              </p>
              <p style={{ margin: 0 }}>
                <strong>Nombre Cedi:</strong>{" "}
                {clientData.nombreBodega
                  ? clientData.nombreBodega
                  : "Sin nombre Cedi"}
              </p>
              <p style={{ margin: 0 }}>
                <strong>Nombre Regional:</strong>{" "}
                {clientData.nombreRegional
                  ? clientData.nombreRegional
                  : "Sin Nombre"}
              </p>
              <p style={{ margin: 0 }}>
                <strong>Nombre Misión:</strong>{" "}
                {clientData.nombreMision
                  ? clientData.nombreMision
                  : "Sin Nombre de Misión"}
              </p>
              <p style={{ margin: 0 }}>
                <strong>Veredicto:</strong>{" "}
                {clientData.veredicto == null
                  ? "Sin Veredicto"
                  : JSON.parse(clientData.veredicto.toLowerCase())
                  ? "Aprobado"
                  : "No Aprobado"}
              </p>
            </div>
          }
        />
      </Card>
    </Col>
  );
};

export default PhotoCard;
