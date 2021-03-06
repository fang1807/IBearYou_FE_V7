const initialState = {
	userdata:{},
	questions: [],
	questionId:'',
	currentQuestion:{},
	fetching: false,
	fetched: false,
	goodstory:[],
	healsentence:[],
	currentFeelID :'',
	currentDiaryID: '',
	currentDate: '',
	currentSound: '',
	deleteAlarm: '',
	addAlarm: '',
	selectedDiaryData:{},
	currentCardID: [],
	choiceScore: {},
	fetchcard: [],
	priorityID: '',
	finishdate:'',
	todolistID:{},
	currentResultID:{},
	detailResult: {},
	
};

export default function reducers(state=initialState, action) {
	

	switch (action.type) {
		case 'FETCH_RANK': 
			return { ...state, fetching: true };
		case 'FETCH_SECOND_REJECTED': 
			return { ...state, fetching: false, error: action.payload };
		case 'FETCH_QUESTIONS1': 
					return { ...state, fetching: false, error: action.payload };
		case 'FETCH_GOOD_STORY': 
					return { ...state, fetching: false, error: action.payload };
		case 'FETCH_BAD_STORY': 
					return { ...state, fetching: false, error: action.payload };
		case 'FETCH_WISH_STORY': 
					return { ...state, fetching: false, error: action.payload };
		case 'FETCH_HEAL_SENTENCE': 
					return { ...state, fetching: false, error: action.payload };
		case 'FETCH_LIST_ALARM': 
					return { ...state, fetching: false, error: action.payload };
		case 'FETCH_QUESTIONS': 
			return {
				 ...state,   
				questions: action.payload
			}

		case 'FETCH_CARD': 
			return {
				 ...state,   
				fetchcard: action.payload
			}

		case 'SET_QUESTION_ID': 
			return {
				 ...state,   
				questionId: action.payload
			}
		case 'SET_SELECTED_DIARY_DATA': 
			return {
				 ...state,   
				selectedDiaryData: action.payload
			}
		case 'SET_CURRENT_FEEL_ID': 
			return {
				 ...state,   
				currentFeelID: action.payload
			}
		case 'SET_CURRENT_QUESTION': 
			return {
				...state,   
				currentQuestion: action.payload
			}
		case 'SET_CURRENT_DIARY_ID' :
			return {
				...state,
				currentDiaryID:action.payload
			}
		case 'SET_CURRENT_DATE' :
			return {
				...state,
				currentDate:action.payload
			}
		case 'SET_USER_DATA' :
			return {
				...state,
				userdata:action.payload
			}
		case 'SET_ADD_ARARM' :
			return {
				...state,
				addAlarm:action.payload
			}
		case 'SET_DELETE_ALARM' :
			return {
				...state,
				deleteAlarm:action.payload
			}
		case 'SET_SOUND_ID' :
			return {
				...state,
				currentSound:action.payload
			}
		case 'SET_CURRENT_CARD_ID' :
			return {
				...state,
				currentCardID:action.payload
			}
	    		case 'SET_CHOICE_SCORE' :
			return {
				...state,
				choiceScore:action.payload
			}
		case 'SET_CURRENT_PRIORITY_ID': 
			return {
				 ...state,   
				priorityID: action.payload
			}
		case 'SET_CURRENT_FINISH_DATE': 
			return {
				 ...state,   
				finishdate: action.payload
			}
		case 'SET_CURRENT_TODO_LIST_ID': 
			return {
				 ...state,   
				todolistID: action.payload
			}
		case 'SET_CURRENT_RESULT_ID': 
			return {
				 ...state,   
				currentResultID: action.payload
			}
		case 'SET_CURRENT_DETAIL_RESULT': 
			return {
				 ...state,   
				detailResult: action.payload
			}
		

	
		default:
			return state
	}
}