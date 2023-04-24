package cn.iocoder.ui.config;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * UI 的配置类
 *
 * @author 芋道源码
 */
@Configuration(proxyBeanMethods = false)
public class UiConfiguration implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // 管理后台 Vue2 的配置
        registry.addResourceHandler("/admin-ui-vue2/**", "/admin-ui-vue2/", "/admin-ui-vue2")
                .addResourceLocations("classpath:/static/admin-ui-vue2/")
                // 自定义 ClassPathResource 实现类，在前端请求的地址匹配不到对应的路径时，强制使用 /admin-ui-vue2/index.html 资源
                // 本质上，等价于 nginx 在处理不到 Vue 的请求地址时，try_files 到 index.html 地址
                // 想要彻底理解，可以调试 ResourceHttpRequestHandler 的 resolveResourceLocations 方法，前端请求 /admin-ui-vue2/system/tenant 地址
                .addResourceLocations(new ClassPathResource("/static/admin-ui-vue2/index.html") {

                    @Override
                    public Resource createRelative(String relativePath) {
                        return this;
                    }

                })
        ;

        // 管理后台 Vue3 的配置
        registry.addResourceHandler("/admin-ui-vue3/**", "/admin-ui-vue3/", "/admin-ui-vue3")
                .addResourceLocations("classpath:/static/admin-ui-vue3/")
                // 自定义 ClassPathResource 实现类，在前端请求的地址匹配不到对应的路径时，强制使用 /admin-ui-vue3/index.html 资源
                // 本质上，等价于 nginx 在处理不到 Vue 的请求地址时，try_files 到 index.html 地址
                // 想要彻底理解，可以调试 ResourceHttpRequestHandler 的 resolveResourceLocations 方法，前端请求 /admin-ui-vue3/system/tenant 地址
                .addResourceLocations(new ClassPathResource("/static/admin-ui-vue3/index.html") {

                    @Override
                    public Resource createRelative(String relativePath) {
                        return this;
                    }

                })
        ;

        // 管理后台 Vue3 的配置
        registry.addResourceHandler("/admin-ui-vben/**", "/admin-ui-vben/", "/admin-ui-vben")
                .addResourceLocations("classpath:/static/admin-ui-vben/")
                // 自定义 ClassPathResource 实现类，在前端请求的地址匹配不到对应的路径时，强制使用 /admin-ui-vben/index.html 资源
                // 本质上，等价于 nginx 在处理不到 Vue 的请求地址时，try_files 到 index.html 地址
                // 想要彻底理解，可以调试 ResourceHttpRequestHandler 的 resolveResourceLocations 方法，前端请求 /admin-ui-vben/system/tenant 地址
                .addResourceLocations(new ClassPathResource("/static/admin-ui-vben/index.html") {

                    @Override
                    public Resource createRelative(String relativePath) {
                        return this;
                    }

                })
        ;
    }

    @Component
    public static class UiApplicationRunner implements ApplicationRunner {

        @Override
        public void run(ApplicationArguments args) throws Exception {
            System.out.println("管理后台 Vue2 版：http://127.0.0.1:2048/admin-ui-vue2/");
            System.out.println("管理后台 Vue3 版：http://127.0.0.1:2048/admin-ui-vue3/");
            System.out.println("管理后台 Vue3 版：http://127.0.0.1:2048/admin-ui-vben/");
        }

    }

}
