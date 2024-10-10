package run.halo.app.redis.listener.RedisStreamListener.java;

import org.springframework.data.redis.connection.stream.MapRecord;
import org.springframework.data.redis.connection.stream.ReadOffset;
import org.springframework.data.redis.stream.StreamMessageListenerContainer;
import org.springframework.data.redis.stream.StreamMessageListenerContainer.StreamMessageListenerContainerOptions;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import java.time.Duration;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component
public class RedisStreamListener {

    private final StreamMessageListenerContainer<String, MapRecord<String, Object, Object>> listenerContainer;
    private static final String STREAM_KEY = "post-publish-stream"; // Redis Stream 的 Key
    private static final Logger log = LoggerFactory.getLogger(RedisStreamListener.class);

    public RedisStreamListener(StreamMessageListenerContainer<String, MapRecord<String, Object, Object>> listenerContainer) {
        this.listenerContainer = listenerContainer;
    }

    @Scheduled(fixedRate = 5000) // 每隔5秒刷新
    public void listenToPostPublishStream() {
        StreamMessageListenerContainerOptions<String, MapRecord<String, Object, Object>> options =
            StreamMessageListenerContainerOptions.builder()
                .pollTimeout(Duration.ofMillis(100)) // 轮询超时
                .build();

        listenerContainer.receive(StreamReadRequest.builder(STREAM_KEY)
            .offset(ReadOffset.lastConsumed())
            .build(), message -> {
                String postId = (String) message.getValue().get("postId");
                String title = (String) message.getValue().get("title");
                log.info("Received new post published event: postId={}, title={}", postId, title);
                // 在此处理收到的消息
            });

        listenerContainer.start();
    }
}
