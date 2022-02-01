import reducer from './user';
import {
    changeFirstName,
    changeSecondName,
    changeOtherOne,
    changeOtherTwo,
    toggleOnDashboard

} from '../../../actions/ui/form/user/user';


it('change first name', () => {
    expect(
        reducer(
            {
                firstname: ''
            },
            changeFirstName(
                'Myles'
            )
        )
    ).toEqual({
        firstname: 'Myles'
    });
});
