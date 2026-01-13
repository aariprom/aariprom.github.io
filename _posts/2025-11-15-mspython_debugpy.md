---
layout: post
title: "cursor 내 ms-python.debugpy PATH 문제"
date: 2025-11-15
categories: [dev]
excerpt: "MS Python extension이 PATH를 망치는 문제와 해결 방법"
---

### 문제
  분명 ollama 설치 후 cmd, powershell에서 ollama 명령어가 잘 실행되는 것도 봤고, PATH에도 있는 걸 확인했는데,
cursor 내 터미널에서만 인식이 안되는 문제가 있었다...

### 이유 찾기
  cursor 내 터미널은 추가로 여기저기에서 주입된 환경변수를 사용할 수도 있겠다 싶어 cursor 터미널의 environment를 찾아보았다.

  일단 터미널에서 $env:PATH를 실행했다. 분명 ollama는 있는데, 마지막 줄의 다른 변수와 세미콜론으로 구분이 되지 않은 점이 보였다. 이 점이 무척 의심스러워, cursor의 extension이 환경변수를 주입하는 방식의 문제로 의심됐다.

  Terminal: Show Environment Contributions에서 어떤 extension이 어떤 변수를 주입하는 지 볼 수 있었다.

![](/images/2025-11-15-mspython_debugpy/1.png)

  ms-python.debugpy라는 extension이 PATH를 수정하는 부분이 있었는데, 이 부분에 세미콜론이 빠져 문제를 일으킨다는 점이 보였다. 실제로, 아래처럼 마지막 줄의 ollama와 .cursor의 extension이 세미콜론 없이 concatenate되어 인식이 되지 않았던 것으로 보인다.

### 해결
  ms-python.debugpy를 disable하니 해결되었다.

  해당 extension의 Github issue 페이지에서 유사한 issue를 볼 수 있었다. https://github.com/microsoft/vscode-python-debugger/issues/843

### 비고
  많은 사람들이 쓰는 MS의 extension인데도 이런 일이 있구나 싶어 신기했다.
