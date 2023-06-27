import { Container, Links, Content } from "./styles";

import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          <h1>Introdução ao react</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            facere sapiente repudiandae rerum! Error, debitis. Illum non vero
            unde, architecto debitis eos esse iste facere incidunt saepe
            officiis possimus expedita.
          </p>
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="@" target="blank">
                  https://www.rocketseat.com.br/
                </a>
              </li>
              <li>
                <a href="@" target="blank">
                  https://www.rocketseat.com.br/
                </a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="Nodejs" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
