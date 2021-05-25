import { observer } from 'mobx-react-lite';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Select from '../../components/Select';
import regions from '../../constants/regions';
import FoodStore from '../../FoodStore';
import { Region } from '../../models/Region';

interface RegionSelectProps {
  foodStore: FoodStore;
}
export const RegionSelect: React.FC<RegionSelectProps> = observer(
  ({ foodStore }: RegionSelectProps) => {
    const handleSelect = (id: string) => {
      foodStore.setSelectedRegion(id as Region);
    };

    return (
      <Select
        id="region-select"
        selectedValueId={foodStore.selectedRegion}
        values={regions.map((region) => ({
          id: region,
          name: <FormattedMessage id={`regionSelect.${region}`} />,
        }))}
        onChange={handleSelect}
        label={<FormattedMessage id="regionSelect.selectLabel" />}
      />
    );
  }
);
