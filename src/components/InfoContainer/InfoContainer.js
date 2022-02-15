import styled from "styled-components";

const Section = styled.section`
  width: 300px;
  position: relative;
  border: 1px solid #5a5a5a;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-left: 30px;
`;

const InfoItem = styled.p`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  padding: 20px;
  flex-direction: column;
  gap: 7px;
`;

const ItemData = styled.span`
  font-size: 30px;
`;

const InfoContainer = () => {
  return (
    <Section>
      <InfoItem>
        Total Tasks:
        <ItemData>0</ItemData>
      </InfoItem>

      <InfoItem>
        Compleated Tasks:
        <ItemData>0</ItemData>
      </InfoItem>

      <InfoItem>
        Ayabababadu:
        <ItemData>0</ItemData>
      </InfoItem>
    </Section>
  );
};

export default InfoContainer;
