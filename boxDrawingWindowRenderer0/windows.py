class Sandbox:
  def __init__(self, windows):
    self.windows = windows
  def render(self):
    render = [[" ",]*10, [" ",]*10, [" ",]*10, [" ",]*10, [" ",]*10, [" ",]*10, [" ",]*10, [" ",]*10, [" ",]*10, [" ",]*10, [" ",]*10, ]
    for layer, x, y, width, height in self.windows:
      if layer > 0:
        for i in range(x, x+width):
          render[y][i] = "+"
          render[y+height][i] = "+"
        for i in range(y, y+height):
          render[i][x] = "+"
          render[i][x+width] = "+"
    return render

class Window:
  def __init__(self, layer, x, y, width, height):
    self.layer = layer
    self.x = x
    self.y = y
    self.width = width-1
    self.height = height-1
  def listForm(self):
    return [self.layer,self.x,self.y,self.width,self.height]

winTest = Window(1, 0, 0, 5, 5)
winTest0 = Window(1, 1, 1, 1, 1)
sandTest = Sandbox([winTest.listForm(),winTest0.listForm()])

print(sandTest.render())
for i in sandTest.render():
  for h in i:
    print(end=h)
  print()