import { handleAction } from 'redux-actions';
import { windowResize } from '../../actions/ui/windowResize';

const isMobile = () =>{ console.log('winRxx',window.innerWidth,window.matchMedia('(max-width: 768px)').matches);return (window.matchMedia('(max-width: 1200px)').matches)};
export default handleAction(windowResize, isMobile, isMobile());
