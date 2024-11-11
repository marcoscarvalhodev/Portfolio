export enum SkillsTypes {
  spike_type = 'SPIKE_TYPE',
  cactus_type = 'CACtUS_TYPE',
  soil_type = 'SOIL_TYPE',
}

interface initSkillsInt {
  cactusState: boolean;
  spikeState: boolean;
  soilState: boolean;
}

export const initSkills: initSkillsInt = {
  cactusState: false,
  spikeState: false,
  soilState: false,
};

export type skillsAction =
  | {
      type: SkillsTypes.cactus_type;
      payload: boolean;
    }
  | {
      type: SkillsTypes.soil_type;
      payload: boolean;
    }
  | {
      type: SkillsTypes.spike_type;
      payload: boolean;
    };

export const reducerSkills = (state: typeof initSkills, action: skillsAction) => {
  switch (action.type) {
    case SkillsTypes.cactus_type:
      return { ...state, cactusState: action.payload };
    case SkillsTypes.spike_type:
      return { ...state, spikeState: action.payload };
    case SkillsTypes.soil_type:
      return { ...state, soilState: action.payload };
    default:
      return state;
  }
};
