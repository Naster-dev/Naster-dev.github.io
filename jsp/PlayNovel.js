////게임진행
function ExcuteNovel(_step, _curStep)
{
	if(_curStep != _step)	
	{
		switch(_step)
		{
			case 0:
				ObjectDisplay("char01");
				MsgOutput("[츠루마키]","프로듀서~ 나를 키워줘~!!");
				break;
			case 1:
				SelectBoxCall("좋아", "싫어");
				break;
			case 2:
				MsgOutput("[츠루마키]","고마워 프로듀서~!!","잘 부탁행!!");
				break;
			case 3:
				MsgOutput("[츠루마키]","실망이야 ㅠㅠ");
				break;
			case 4:
				MsgOutput("[츠루마키]","다음에 보도록 하자...");
				break;
			default:
		}
	}
	return _step;
}
