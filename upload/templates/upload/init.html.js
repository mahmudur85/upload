// upload
Up.url = '{% if col %}/{{ col.pk }}{% endif %}/upload';
Up.form_tpl = '{% spaceless %}{% with images.empty_form as i %}
		{% include 'upload/image.html' %}
		{% endwith %}{% endspaceless %}';

// window.onload = function(){ Up.load(); }
$(function(){
	if(!supportsFileInput()){
		$('#up').prepend('<div class="upload-iOS4">To upload pictures' +
			' from your device just e{{ mail }} from\
			{% if user.email %}<b>{{ user.email }}</b>\
			{% else %}email address you used above{% endif %}\
			when you save your ad.</div>');
		$('.default-upload,.upload-hint').hide();
	}
	Up.load();
});