import React from 'react'
import './work.css'
import {MdOutlineEmail} from  'react-icons/md'
import {RiMessengerLine} from  'react-icons/ri'
import {BsWhatsapp} from  'react-icons/bs'

export default function work() {
  return (
    <section id='work'>
      <div class="container">
		<div class="single-box">
			<div class="custom"></div>
			<div class="date-area">
				<span>2021</span>
			</div>
			<div class="content">
				<h2>CV CiptaSolutindo</h2>
				<h3>Fullstack Web Programmer</h3>
				<small className='text-light'>Praktik Kerja Lapangan</small>
			</div>
		</div>
		<div class="single-box box-right">
			<div class="custom"></div>
			<div class="date-area">
				<span>2022</span>
			</div>
			<div class="content">
				<h2>Junior Programmer</h2>
				<h3>PT Inovasi Bakti Nusantara</h3>
				<small className='text-light'>Magang Intern</small>
			</div>
		</div>
		<div class="single-box">
			<div class="custom"></div>
			<div class="date-area">
				<span>2022</span>
			</div>
			<div class="content">
                <div className='text'>
				<h2>Junior Programmer</h2>
                <h3>PT Inovasi Bakti Nusantara</h3>
				<small className='text-light'>Work</small>
                </div>
			</div>
		</div>
		<div class="single-box box-right">
			<div class="custom"></div>
			<div class="date-area">
				<span>2022</span>
			</div>
			<div class="content">
				<h2>Laravel Programmer</h2>
				<h3>Cyberolympus</h3>
				<small className='text-light'>Work</small>
			</div>
		</div>
	</div>
    </section>
  )
}
