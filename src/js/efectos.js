import React, { useEffect } from 'react';
import $ from 'jquery';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Music from '../Music/music.tsx';

const Body = () => {
    useEffect(() => {
        $(document).ready(function(){
            //Efecto menu
            $('.menu a').each(function(index,elemento){
                $(this).css({
                    top:'-200px'
                });
                $(this).animate({
                    top:'0'
                }, 200 + (index * 500));
            });
            // Efecto header
            if($(window).width() > 800){
                $('header .textos').css({
                    opacity: 0,
                    marginTop: 0
                });
                $('header .textos').animate({
                    opacity: 1,
                    marginTop:'-52px'
                }, 3000);
            }

            //Scroll Elementos Menu

            var acercaDe = $('#generalInfo').offset().top,
                Trabajos = $('#Trabajos').offset().top,
                Contacto = $('#contacto').offset().top;
            $('#btn-acerca-de').on('click', function(e){
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: acercaDe - 100
                }, 500);
            })
            $('#btn-Trabajos').on('click', function(e){
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: Trabajos - 20
                }, 500);
            })
            $('#btn-contacto').on('click', function(e){
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: Contacto - 80
                }, 500);
            })
        });
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/music" element={<Music />} />
            </Routes>
            <div className="trabanos">
                <div className="work">
                    <div className="thumb">
                        <Link to="/music" className="link">
                            <img src="img/music.png" alt="" className="Iuno" />
                            <div className="descripcion">
                                <p className="smalltittle">Produccion musica</p>
                                <p className="smalldescription">Grabacion, edicion y composicion</p>
                            </div>   
                        </Link>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default Body;
