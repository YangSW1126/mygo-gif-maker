import cv2
from moviepy.editor import VideoFileClip

class makeGif:
    def __init__(self):
        self.video_path = "mygo\\"
        
    
    def parseDataTest(self, data):
        print(len(data))
        pass

    def cutMp4(self, data):
        fourcc = cv2.VideoWriter_fourcc(*"x264")        
        out = cv2.VideoWriter('output.mp4', fourcc, 23, (1280, 720))  


        for i in range(len(data)):
            video = cv2.VideoCapture(self.video_path + str(data[i][0]) +".mp4")
            video.set(cv2.CAP_PROP_POS_FRAMES, int(data[i][1])) 
            # width = int(video.get(cv2.CAP_PROP_FRAME_WIDTH))    
            # height = int(video.get(cv2.CAP_PROP_FRAME_HEIGHT))  
            # fps = int(video.get(cv2.CAP_PROP_FPS))

            duration = int(data[i][2]) - int(data[i][1])
            frame_count = 0

            
            while duration > 0:
                ret, frame = video.read()
                try:
                    if frame_count % 2 == 0:
                        out.write(frame)
                except:
                    pass
                
                duration = duration - 1
                frame_count = frame_count + 1
            video.release()
            cv2.destroyAllWindows()
        out.release()      # 釋放資源

        gif = VideoFileClip("output.mp4")  # 讀取影片
        gif.write_gif("output.gif", fps = 24)  

if __name__ == '__main__':
    
    pass





# startFrame = 30120
# finishFrame = 30168

# video = cv2.VideoCapture("7.mp4")
# video.set(cv2.CAP_PROP_POS_FRAMES, int(startFrame)) 
# width = int(video.get(cv2.CAP_PROP_FRAME_WIDTH))    # 取得影像寬度
# height = int(video.get(cv2.CAP_PROP_FRAME_HEIGHT))  # 取得影像高度
# fps = int(video.get(cv2.CAP_PROP_FPS))

# duration = finishFrame - startFrame
# frame_count = 0
# print(fps)

# fourcc = cv2.VideoWriter_fourcc(*"x264")          # 設定影片的格式為 MJPG
# out = cv2.VideoWriter('test.mp4', fourcc, fps, (width, height))  # 產生空的影片

# while duration > 0:
#     ret, frame = video.read()

#     try:
#         if frame_count % 2 == 0:
#             out.write(frame)
#     except:
#         pass
    
#     duration = duration - 1
#     frame_count = frame_count + 1
    
# video.release()
# out.release()      # 釋放資源
# cv2.destroyAllWindows()

# getgif = VideoFileClip("test.mp4")  # 讀取影片
# getgif.write_gif("test.gif", fps = 24)           # 將這個片段轉換成 gif
