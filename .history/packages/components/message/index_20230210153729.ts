import Message from './src/message';
import { withInstallFunc } from '@nand-ui/utils/withInstallFunc';

export const NandMessage = withInstallFunc(Message, '$message');

export default NandMessage;
