/*
<라이브러리 항목>
*메시지출력
- MsgOutput(타이틀,1라인,2라인,3라인,4라인)

*메시지비움
- MsgClear()

*굵게
- MsgBold()

*폰트크기
- MsgSize(크기)

*객체이동(상대)
 - ObjectMoveInc(객체id,x증분치, y증분치) - 단위 px

*객체이동(절대)
 - ObjectMoveAbs(객체id,x좌표, y좌표) - 단위 px

*객체크기조정
 - ObjectScale(객체id,비율) - 기준 1.0

*객체회전
 - ObjectRotate(객체id,회전량) - 단위:deg

*변환중심점 위치설정
 - ObjectSetOrigin(객체id, x위치, y위치) - %로 지정

*애니메이션 설정
 - ObjectSetAnimate(객체id, 걸리는시간, 가감속 사용여부)

*객체표시여부
 - ObjectDisplay(객체id, 보이기('on')/숨기기('off'))
*/

////메시지
//출력
function MsgOutput(title="", lin1="", lin2="", lin3="", lin4="")
{
	msgBox = document.getElementById("TalkBox");
	string = title+'\r\n'+lin1+'\r\n'+lin2+'\r\n'+lin3+'\r\n'+lin4;
	
	msgBox.innerText = string;
}
//클리어
function MsgClear()
{
	msgBox = document.getElementById("TalkBox");
	msgBox.innerText = "";
}
//굵은 글씨
function MsgBold(_bOn = false)
{
	msgBox = document.getElementById("TalkBox");
	if(_bOn==true)
		msgBox.style.fontWeight=700;
	else
		msgBox.style.fontWeight=500;
	
}
//폰트 사이즈
function MsgSize(_sz)
{
	msgBox = document.getElementById("TalkBox");
	string = _sz+'px'
	
	msgBox.style.fontSize=string;
}
////선택지
//선택지 불러오기
function SelectBoxCall(_item1="", _item2="",_item3="",_item4="")
{
	NextLock=true;
	selBox = document.getElementById("SelectBox");
	//선택지1번
	if(_item1 == "")
	{
		selBox.children['s1'].style.visibility='hidden';
	}
	selBox.children['s1'].innerText=_item1;
	//선택지2번
	if(_item2 == "")
	{
		selBox.children['s2'].style.visibility='hidden';
	}
	selBox.children['s2'].innerText=_item2;
	//선택지3번
	if(_item3 == "")
	{
		selBox.children['s3'].style.visibility='hidden';
	}
	selBox.children['s3'].innerText=_item3;
	//선택지4번
	if(_item4 == "")
	{
		selBox.children['s4'].style.visibility='hidden';
	}
	selBox.children['s4'].innerText=_item4;

	selBox.style.visibility= 'visible';
}
function SelectBoxEnd()
{
	selBox = document.getElementById("SelectBox");

	for(i=0; i<selBox.children.length;i++)
		selBox.children[i].style='';

	selBox.style.visibility= 'hidden';
}

////오브젝트
//상대값 이동
function ObjectMoveInc(_id, _dx, _dy)
{
	obj = document.getElementById(_id);
	dx = obj.style.left.replace('px','');
	dy = obj.style.top.replace('px','');

	dx = Number(dx)+_dx;
	dy = Number(dy)+_dy;

	obj.style.left = dx + "px";
	obj.style.top = dy + "px";
}
//절대값 이동
function ObjectMoveAbs(_id, _x, _y)
{
	obj = document.getElementById(_id);
	x = obj.style.left.replace('px','');
	y = obj.style.top.replace('px','');
	
	x = _x;
	y = _y;

	obj.style.left = x + "px";
	obj.style.top = y + "px";
}
//스케일링
function ObjectScale(_id, _rate = 1)
{
	obj = document.getElementById(_id);
	obj.style.scale=_rate;
}
//회전
function ObjectRotate(_id, _Theta = 0)
{
	obj = document.getElementById(_id);
	obj.style.transform="rotate(" + _Theta + "deg)";

}
//변경중심 변경
function ObjectSetOrigin(_id, _Ox=50, _Oy=50)
{
	obj = document.getElementById(_id);
	obj.style.transformOrigin=_Ox + "% " + _Oy+"%";
}
//애니메이션 부여
function ObjectSetAnimate(_id, _time=0, _acc=0)
{
	obj = document.getElementById(_id);
	if(_time > 0)
	{
		obj.style.transition= _time + "s";
		if(_acc == 0)
		{
			obj.style.transitionTimingFunction="linear";
		}
		else
		{
			obj.style.transitionTimingFunction="ease";
		}
	}
	else
	{
		obj.style.transition="none"
	}
}
//객체 표시
function ObjectDisplay(_id, _sw='on')
{
	obj = document.getElementById(_id);
	if(_sw=='off')
		obj.style.visibility='hidden';
	else if(_sw=='on')
		obj.style.visibility='visible';
}