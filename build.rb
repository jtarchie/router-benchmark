# frozen_string_literal: true

require 'json'

labels = nil
datasets = Dir[File.join(__dir__, 'benchmark', 'results', '*.json')].map do |filename|
  payload = JSON.parse(File.read(filename))

  labels ||= payload
             .fetch('results')
             .map { |result| result.fetch('name') }
             .sort

  data = payload
         .fetch('results')
         .sort_by { |result| result.fetch('name') }
         .map do |result|
    result.fetch('ops')
  end

  {
    label: File.basename(filename, ".json"),
    data: data,
  }
end

File.write("benchmark/combined.json", {
       labels: labels,
       datasets: datasets
}.to_json)
