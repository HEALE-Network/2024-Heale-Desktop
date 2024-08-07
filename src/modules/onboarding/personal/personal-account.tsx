import { Container, Flex } from '@chakra-ui/react';
import React from 'react';
import { Wizard } from 'react-use-wizard';
import PersonalInfo from '../components/Wizard/PersonalInfo';
import Authentication from '../components/Wizard/Authentication';
import VerifyIdentity from '../components/Wizard/VerifyIdentity';
import ConnectAccount from '../components/Wizard/ConnectAccount';
import RecieveCard from '../components/Wizard/RecieveCard';
import WizardHeader, {
  usePersistedStep,
} from '../components/Wizard/WizardHeader';
import { ThirdwebProvider } from 'thirdweb/react';

const PersonalAccount = () => {
  const [step] = usePersistedStep(0);
  return (
    <Container maxW={{ lg: '80%', sm: '90%', base: '100%' }}>
      <Flex gap={{ md: 8, base: 4 }} flexDir={{ md: 'row', base: 'column' }}>
        <ThirdwebProvider>
          <Wizard startIndex={step} header={<WizardHeader />}>
            <PersonalInfo />
            <Authentication />
            <VerifyIdentity />
            <ConnectAccount />
            <RecieveCard />
          </Wizard>
        </ThirdwebProvider>
      </Flex>
    </Container>
  );
};

export default PersonalAccount;
