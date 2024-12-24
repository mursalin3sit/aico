declare let $: any;
import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FaqComponent } from './faq/faq.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterLink, FaqComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

    title = 'Avib - Creative Multipurpose HTML Template';

    ngOnInit() {

        // Navbar
        $('.navbar .navbar-nav li a').on('click', function(){
            $('.navbar-collapse').collapse('hide');
        });

        // Custom Cursor
        try {
            $(".single-demo-item.on-hover").on("mouseenter", function() {
                $('.envytheme-cursor').addClass('active');
                $('.envytheme-cursor2').addClass('active');
            });
            $(".single-demo-item.on-hover").on("mouseleave", function() {
                $('.envytheme-cursor').removeClass('active');
                $('.envytheme-cursor2').removeClass('active');
            });
        } catch (err) {}

        // Animate
        $('.animate').scrolla();
        
    }

}