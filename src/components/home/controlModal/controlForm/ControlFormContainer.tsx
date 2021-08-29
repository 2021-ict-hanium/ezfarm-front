import { useCallback, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modifyControllerRequest } from '../../../../actions/myFarm';
import useInput from '../../../../hooks/useInput';
import useSwitch from '../../../../hooks/useSwitch';
import { RootState } from '../../../../redux/modules/reducer';
import ControlFormPresenter from './ControlFormPresenter';

const ControlFormContainer = () => {
    const dispatch = useDispatch();

    const { myFarmId } = useSelector((state: RootState) => state.myFarm);

    const [water, onChangeWater] = useSwitch(false);
    const [temperature, onChangeTemperature] = useInput('');
    const [illuminance, onChangeIlluminance] = useSwitch(false);
    const [co2, onChangeCo2] = useSwitch(false);

    const onoffValue = (value: boolean) => {
        if (value) {
            return 'ON';
        }
        return 'OFF';
    };

    const onSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const data = {
                remoteId: myFarmId,
                water: onoffValue(water),
                temperature: Number(temperature),
                illuminance: onoffValue(illuminance),
                co2: onoffValue(co2),
            };
            dispatch(modifyControllerRequest(data));
        },
        [dispatch, myFarmId, water, temperature, illuminance, co2],
    );
    return (
        <ControlFormPresenter
            water={water}
            onChangeWater={onChangeWater}
            temperature={temperature}
            onChangeTemperature={onChangeTemperature}
            illuminance={illuminance}
            onChangeIlluminance={onChangeIlluminance}
            co2={co2}
            onChangeCo2={onChangeCo2}
            onSubmit={onSubmit}
        />
    );
};
export default ControlFormContainer;
