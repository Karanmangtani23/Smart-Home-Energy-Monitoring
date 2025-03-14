import energyService from "../../services/energyService";

export const fetchEnergyUsage = () => async (dispatch) => {
  try {
    const data = await energyService.getEnergyConsumption();
    dispatch({ type: "FETCH_ENERGY_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_ENERGY_FAILURE", payload: error.message });
  }
};
