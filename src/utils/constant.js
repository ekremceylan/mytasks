import {
  ChartCircle,
  Clock,
  TickCircle,
  CloseCircle,
  ArrowCircleRight2,
} from 'iconsax-react-native';
import AppColors from '../theme/color';

const status = {
  ONGOING: 1,
  PENDING: 2,
  COMPLETED: 3,
  CANCEL: 4,
};

const taskValues = [
  {
    status: 1,
    title: 'Ongoing',
    color: AppColors.ONGOING,
    icon: <ChartCircle size="32" color={AppColors.WHITE} />,
  },
  {
    status: 2,
    title: 'Pending',
    color: AppColors.PENDING,
    icon: <Clock size="32" color={AppColors.WHITE} />,
  },
  {
    status: 3,
    title: 'Complated',
    color: AppColors.COMPLATED,
    icon: <TickCircle size="32" color={AppColors.WHITE} />,
  },
  {
    status: 4,
    title: 'Cancel',
    color: AppColors.CANCEL,
    icon: <CloseCircle size="32" color={AppColors.WHITE} />,
  },
];

export {status, taskValues};