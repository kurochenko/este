// @flow
import React from 'react';
import linksMessages from '../../common/app/linksMessages';
import messages from '../../common/notfound/messages';
import { FormattedMessage, injectIntl } from 'react-intl';
import {
  Box,
  Link,
  PageHeader,
  Title,
} from '../app/components';

type NotFoundPageProps = {
  intl: $IntlShape,
};

const NotFoundPage = ({ intl }: NotFoundPageProps) => (
  <Box>
    <Title message={linksMessages.notFound} />
    <PageHeader
      heading={intl.formatMessage(messages.h1)}
      description={intl.formatMessage(messages.p)}
    />
    <Link exactly to="/">
      <FormattedMessage {...messages.continue} />
    </Link>
  </Box>
);

export default injectIntl(NotFoundPage);
